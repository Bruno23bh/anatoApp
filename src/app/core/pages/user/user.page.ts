import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonToggle } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { UserContent } from 'src/app/shared/interfaces/user-content';
import { ContentService } from 'src/app/shared/services/content.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { Usuario } from '../../interfaces/usuario';
import { ThemeService } from '../../services/theme.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit, OnDestroy {
  @ViewChild(IonToggle) themeToggle: IonToggle;
  @ViewChild(IonToggle) notificationsToggle: IonToggle;
  isSaving = false;
  userForm: FormGroup;
  activeSegment: string;
  usuario: Usuario;
  userContent: UserContent;
  allowNotificationsState: boolean;
  darkcolorThemeState: boolean;
  unsubscribe: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuariosService,
    private toastService: ToastService,
    private router: Router,
    private contentService: ContentService,
    private themeService: ThemeService
  ) { }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    let canDeactivate = true;
    if (!this.isSaving && this.userForm.dirty) {
      canDeactivate = window.confirm(this.userContent.messageSalirSinGuardar);
    }
    return canDeactivate;
  }

  ngOnInit() {
    this.userContent = this.contentService.contents.user;
    this.usuario = this.activatedRoute.snapshot.data.usuario;
    this.allowNotificationsState = this.usuario.allowNotifications;
    this.darkcolorThemeState = this.usuario.colorTheme === 'dark';

    this.activeSegment = this.userContent.tabs[0].name;

    if (this.usuario) {
      this.buildForm();
      this.userForm.patchValue(this.usuario);
    }
  }

  changeSegment(event: any) {
    this.activeSegment = event.detail.value;
  }

  onSubmit() {
    this.isSaving = true;
    this.buildUsuario();
    this.usuarioService
      .putUsuario(this.usuario, this.usuario.id)
      .then(
        () => {
          const values: any = {
            message: this.userContent.messageEditadoConExito,
            color: 'success',
          };
          this.toastService.presentToast(values);
        }
      )
      .catch(
        (error) => {
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  buildForm() {
    this.userForm = new FormGroup({
      nombre: new FormControl(
        null,
        {
          validators:
            Validators.compose([
              Validators.minLength(3),
              Validators.maxLength(100),
              Validators.pattern('[^\(\)0-9]*')
            ]),
          updateOn: 'blur'
        }
      ),
      apellido: new FormControl(
        null,
        {
          validators:
            Validators.compose([
              Validators.minLength(3),
              Validators.maxLength(100),
              Validators.pattern('[^\(\)0-9]*')
            ]),
          updateOn: 'blur'
        }
      ),
      documentoTipo: new FormControl(null),
      documentoNro: new FormControl(
        null,
        {
          validators:
            Validators.compose([

              Validators.minLength(3),
              Validators.maxLength(25)

            ]),
          updateOn: 'blur'
        }
      ),
      email: new FormControl(
        null,
        {
          validators:
            Validators.compose([
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(100),
              Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
            ]),
          updateOn: 'blur',
        }
      ),
      fechaNacimiento: new FormControl(
        null,
        {
          validators:
            Validators.compose([
              Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
            ]),
          updateOn: 'blur'
        }
      ),
      cuil: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(20),
              ,
            ]),
          updateOn: 'blur'
        }
      ),
      telefono: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(20),
              ,
            ]),
          updateOn: 'blur'
        }
      ),
      direccion: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(150),
            ]),
          updateOn: 'blur'
        }
      ),
      piso: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(1),
              Validators.maxLength(30),
            ]),
          updateOn: 'blur'
        }
      ),
      departamento: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(1),
              Validators.maxLength(30),
            ]),
          updateOn: 'blur'
        }
      ),
      localidad: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(50),
            ]),
          updateOn: 'blur'
        }
      ),
      provincia: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(50),
            ]),
          updateOn: 'blur'
        }
      ),
      codigoPostal: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(1),
              Validators.maxLength(20),
              ,
            ]),
          updateOn: 'blur'
        }
      ),
      sexo: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(20),
            ]),
          updateOn: 'blur'
        }
      ),
      estadoCivil: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(20),
            ]),
          updateOn: 'blur'
        }
      ),
      nacionalidad: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(40),
            ]),
          updateOn: 'blur'
        }
      )
    });
  }

  buildUsuario() {
    this.usuario = {
      ...this.usuario,
      ...this.userForm.value,
      allowNotifications: this.allowNotificationsState,
      notificaciones: this.usuario.notificaciones
    };
  }

  changeTheme(event: any) {
    if (event.detail.checked) {
      this.themeService.enableDark();
      this.usuario.colorTheme = 'dark';
    } else {
      this.themeService.enableLight();
      this.usuario.colorTheme = 'light';
    }
    this.onSubmit();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onBack() {
    this.router.navigate([`core/settings/${this.usuario.id}`]);
  }
}
