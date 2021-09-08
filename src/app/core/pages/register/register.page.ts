import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RegisterContent } from 'src/app/shared/interfaces/register-content';
import { ContentService } from 'src/app/shared/services/content.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import {
  TermsAndConditionsModalComponent,
} from '../../../shared/components/common/terms-and-conditions-modal/terms-and-conditions-modal.component';
import { Licencia } from '../../interfaces/licencia';
import { Organizacion } from '../../interfaces/organizacion';
import { Usuario } from '../../interfaces/usuario';
import { AuthService } from '../../services/auth.service';
import { OrganizacionService } from '../../services/organizacion.service';
import { UsuariosService } from '../../services/usuarios.service';
import { PasswordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {
  registerForm: FormGroup;
  matchingPasswordsGroup: FormGroup;
  unsubscribe: Subject<void> = new Subject();
  registerContent: RegisterContent;
  isSaving = false;
  terminosCondionesCheck = false;

  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private usuariosService: UsuariosService,
    private organizacionesService: OrganizacionService,
    private angularFirestore: AngularFirestore,
    private router: Router,
    private contentService: ContentService,
    private loadingService: LoadingService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.registerContent = this.contentService.contents.register;
    this.buildForm();
  }

  buildForm() {
    this.matchingPasswordsGroup = new FormGroup(
      {
        password: new FormControl(null,
          {
            validators:
              Validators.compose([
                Validators.minLength(6),
                Validators.maxLength(50),
                Validators.required
              ])
          }
        ),
        confirmPassword: new FormControl(null, Validators.required),
      },
      (formGroup: FormGroup) => PasswordValidator.areEqual(formGroup)
    );

    this.registerForm = this.formBuilder.group({
      nombre: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.required,
              Validators.pattern('[^\(\)0-9]*'),
              Validators.minLength(3),
              Validators.maxLength(50)
            ]),
          updateOn: 'blur'
        }
      ),
      apellido: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.required,
              Validators.pattern('[^\(\)0-9]*'),
              Validators.minLength(3),
              Validators.maxLength(50)
            ]),
          updateOn: 'blur'
        }
      ),
      email: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(100),
              Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
            ]),
          updateOn: 'blur'
        }
      ),
      organizacion: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(100),
            ]),
          updateOn: 'blur'
        }
      ),
      domicilio: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(150),
            ]),
          updateOn: 'blur'
        }
      ),
      telefonoContacto: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(20),

            ]),
          updateOn: 'blur'
        }
      ),
      cuit: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(20),

            ]),
          updateOn: 'blur'
        }
      ),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      matching_passwords: this.matchingPasswordsGroup,
    });
  }

  onSubmit() {
    this.loadingService.present();
    this.authService
      .register(this.registerForm.controls.email.value, this.matchingPasswordsGroup.controls.password.value)
      .then(
        (user: any) => {
          this.authService.sendEmailVerification();
          this.addAdminRole(user.user.uid);
        }
      )
      .catch(
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  addOrganizacion(userId) {
    const id = this.angularFirestore.createId();
    const licencia: Licencia = {
      activo: true,
      id: 'gratis',
      organizacionId: id,
      planes: [
        {
          referenciaId: 'Free plan: ' + id,
          cantidadMeses: 1,
          fechaDesde: moment().format('DD/MM/YYYY'),
          fechaHasta: moment().add(1, 'month').format('DD/MM/YYYY'),
          nombre: 'gratis'
        }
      ]
    };
    const organizacion: Organizacion = {
      id,
      domicilio: this.registerForm.controls.domicilio.value,
      nombreApellidoResponsable: `${this.registerForm.controls.nombre.value} ${this.registerForm.controls.apellido.value}`,
      emailContacto: this.registerForm.controls.email.value,
      nombre: this.registerForm.controls.organizacion.value,
      telefonoContacto: this.registerForm.controls.telefonoContacto.value,
      cuit: this.registerForm.controls.cuit.value,
      normativas: [],
      formularios: [],
      privados: [],
      usuarios: [],
      dependencias: [],
      extraStorage: 0,
      remainingStorage: 1073741824,
      consumedStorage: 0,
      licencia,
      availableUsers: 1
    };

    organizacion.usuarios.push({
      id: userId,
      email: this.registerForm.controls.email.value,
      nombre: this.registerForm.controls.nombre.value,
      apellido: this.registerForm.controls.apellido.value,
      isAdmin: true,
      isActive: true,
      hasPaid: true,
      licence: 'gratis',
      organizacionId: id,
      colorTheme: 'light',
      allowNotifications: true,
      tokens: [],
      notificaciones: []
    });

    this.organizacionesService
      .putOrganizacion(organizacion, id)
      .then(
        () => {
          this.addUsuario(userId, id);
        }
      )
      .catch(
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  addUsuario(userId, organizacionId) {
    const usuario: Usuario = {
      id: userId,
      organizacionId,
      nombre: this.registerForm.controls.nombre.value,
      apellido: this.registerForm.controls.apellido.value,
      email: this.registerForm.controls.email.value,
      isAdmin: true,
      isActive: true,
      hasPaid: true,
      licence: 'gratis',
      colorTheme: 'ligth',
      allowNotifications: true,
      tokens: [],
      notificaciones: []
    };

    this.usuariosService
      .putUsuario(usuario, userId)
      .then(
        () => {
          this.router.navigate(['core/thanks']);
        }
      )
      .catch(
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  addAdminRole(userId: string) {
    this.authService.addAdminRole(userId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        () => {
          this.addOrganizacion(userId);
        },
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  async onTerminosCondiciones() {
    const modal = await this.modalController.create({
      component: TermsAndConditionsModalComponent
    });

    await modal.present();
  }
}
