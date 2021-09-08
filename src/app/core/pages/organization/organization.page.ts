import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { ModalController, Platform, PopoverController } from '@ionic/angular';
import * as moment from 'moment';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelpPopoverComponent } from 'src/app/shared/components/common/help-popover/help-popover.component';
import { OrganizationContent } from 'src/app/shared/interfaces/organization-content';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ContentService } from 'src/app/shared/services/content.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { Dependencia } from '../../interfaces/dependencia';
import { Organizacion } from '../../interfaces/organizacion';
import { Usuario } from '../../interfaces/usuario';
import { AuthService } from '../../services/auth.service';
import { OrganizacionService } from '../../services/organizacion.service';
import { UsuariosService } from '../../services/usuarios.service';
import { CustomDependenciaModalComponent } from './components/custom-dependencia-modal/custom-dependencia-modal.component';
import {
  RemoveOrganizationModalComponent,
} from './components/remove-organization-modal/remove-organization-modal.component';

// eslint-disable-next-line @typescript-eslint/naming-convention
const { Share } = Plugins;

@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
})
export class OrganizationPage implements OnInit, OnDestroy {
  organizacion: Organizacion;
  isSaving = false;
  organizationForm: FormGroup;
  activeSegment: string;
  unsubscribe: Subject<void> = new Subject();
  organizationContent: OrganizationContent;
  userId: string;
  isRenovarValid: boolean;
  isDesktop: boolean;
  public usuariosPorTipoChart: GoogleChartInterface;
  totalStoragePorTipo: {
    tipoStorage: string;
    cantidad: number;
  }[] = [];
  public storageChart: GoogleChartInterface;
  totalUsuariosPorTipo: {
    tipoUsuario: string;
    cantidad: number;
  }[] = [];
  public usuariosPorEstadoChart: GoogleChartInterface;
  totalUsuariosPorEstado: {
    estadoUsuario: string;
    cantidad: number;
  }[] = [];
  tiposDeStorage: string[] = ['Disponibles', 'Consumidos'];
  tiposDeUsuario: string[] = ['Administrador', 'No administrador'];
  estadosDeUsuario: string[] = ['Activo', 'Inactivo'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private usuariosService: UsuariosService,
    private alertService: AlertService,
    private organizacionService: OrganizacionService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private contentService: ContentService,
    private router: Router,
    private modalController: ModalController,
    public popoverController: PopoverController,
    private angularFireAnalytics: AngularFireAnalytics,
    private angularFirestore: AngularFirestore,
    private platform: Platform
  ) { }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    let canDeactivate = true;
    if (!this.isSaving && this.organizationForm.dirty) {
      canDeactivate = window.confirm(this.organizationContent.messageSalirSinGuardar);
    }
    return canDeactivate;
  }

  ngOnInit() {
    this.organizationContent = this.contentService.contents.organization;
    this.organizacion = this.activatedRoute.snapshot.data.organizacion;
    this.userId = this.activatedRoute.snapshot.params.userId;
    this.activeSegment = this.organizationContent.tabs[0].name;
    if (this.organizacion) {
      this.buildForm();
      this.organizationForm.patchValue(this.organizacion);
      this.isRenovarValid = moment(this.organizacion.licencia.planes[0].fechaHasta, 'DD/MM/YYYY').diff(moment(), 'days') <= 30 ? true : false;
    }
    this.isDesktop = this.platform.is('desktop');
    this.buildUsuariosChartData();
    this.buildStorageChartData();
    // this.checkCustomClaims();
  }

  // getOrganizacion() {
  //   this.organizacionService
  //     .getOrganizacion(this.activatedRoute.snapshot.params.organizacionId)
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(
  //       (organizacion: Organizacion) => {
  //         if (organizacion) {
  //           this.organizacion = organizacion;
  //         }
  //       },
  //       (error) => {
  //         this.toastService.presentErrorToast(error.message);
  //         this.loadingService.dismiss();
  //       }
  //     );
  // }

  validateOrganizationPlan(): boolean {
    // FIXME: Agregar la validacion a partir de los nuevos atributos de la org.
    if (this.organizacion.licencia.id === 'gratis' || this.organizacion.licencia.id === 'basic') {
      return true;
    } else if (this.organizacion.licencia.id === 'premium' && this.organizacion.usuarios.length === 5) {
      return true;
    } else {
      return false;
    }
  }

  changeSegment(event: any) {
    this.activeSegment = event.detail.value;
  }

  onSubmit(isPuttingUser?: boolean) {
    this.isSaving = true;
    this.buildOrganizacion();
    this.organizacionService
      .putOrganizacion(this.organizacion, this.organizacion.id)
      .then(
        () => {
          const values: any = {
            message: isPuttingUser
              ? this.organizationContent.messageGuardadoConExito
              : this.organizationContent.messageEditadoConExito,
            color: 'success',
          };
          this.toastService.presentToast(values);
          this.loadingService.dismiss();
        }
      )
      .catch(
        (error) => {
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  buildForm() {
    this.organizationForm = new FormGroup({
      nombre: new FormControl(
        null,
        {
          validators:
            Validators.compose([
              Validators.required,
              Validators.minLength(2),
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
      nombreApellidoResponsable: new FormControl(
        null,
        {
          validators:
            Validators.compose([
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(100),
            ]),
          updateOn: 'blur'
        }
      ),
      emailContacto: new FormControl(
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
          updateOn: 'change'
        }
      ),
      alias: new FormControl(null,
        {
          validators:
            Validators.compose([
              Validators.minLength(5),
              Validators.maxLength(100),
            ]),
          updateOn: 'change'
        }
      ),
    });
  }

  buildOrganizacion() {
    this.organizacion = {
      ...this.organizacion,
      ...this.organizationForm.value
    };
  }

  addUser() {
    const values = {
      header: this.organizationContent.alertAnadirUsuarioTitle,
      subHeader: this.organizationContent.alertAnadirUsuarioSubTitle
    };

    this.alertService
      .showUserRegistrationAlert(values,
        this.organizationContent.alertAnadirUsuarioButtonNo, this.organizationContent.alertAnadirUsuarioButtonYes,
        this.organizationContent.alertAnadirUsuarioNombrePlaceholder, this.organizationContent.alertAnadirUsuarioApellidoPlaceholder,
        this.organizationContent.alertAnadirUsuarioEmailPlaceholder)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (response: any) => {
          if (response) {
            if (!response.nombre || !response.apellido) {
              this.toastService.presentErrorToast(this.organizationContent.alertAnadirUsuarioUserValidation, true);
            } else if (response.email.match('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
              && !this.isUsuarioIsAlreadyRegistered(response.email)) {
              this.loadingService.present();
              this.register(response.email, response.nombre, response.apellido);
            } else {
              this.toastService.presentErrorToast(this.organizationContent.alertAnadirUsuarioEmailValidation, true);
            }
          }
        },
        (error) => {
          this.toastService.presentErrorToast(error ? error.message : 'Error');
          this.loadingService.dismiss();
        }
      );
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  isUsuarioIsAlreadyRegistered(email: string): boolean {
    let usuarioIsAlreadyRegistered = false;
    this.organizacion.usuarios.forEach((usuario: Usuario) => {
      if (usuario.email === email) {
        usuarioIsAlreadyRegistered = true;
        return;
      }
    });
    return usuarioIsAlreadyRegistered;
  }

  register(email: string, nombre: string, apellido: string) {
    this.authService.createUser(email, 'Aa' + Math.random().toString(36).substring(5), nombre, apellido)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (user: any) => {
          if (user) {
            const newUsuario: Usuario = {
              id: user.uid,
              email,
              nombre,
              apellido,
              isAdmin: false,
              isActive: true,
              hasPaid: true,
              licence: this.organizacion.licencia.id,
              organizacionId: this.organizacion.id,
              colorTheme: 'light',
              allowNotifications: true,
              tokens: [],
              notificaciones: []
            };
            this.putUsuarioToOrganization(newUsuario, true, false);
          } else {
            this.loadingService.dismiss();
            this.toastService.presentErrorToast(`El usuario ya posee una cuenta en la aplicacion`, true);
          }
        },
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  putUsuarioToOrganization(usuario: Usuario, isAdding: boolean, isDeleting: boolean) {
    if (isAdding) {
      this.addHasPaidRole(usuario);
      this.organizacion.usuarios.push(usuario);
      this.putUsuario(usuario, true);
    } else {
      this.organizacion.usuarios.forEach((usuarioInOrganizacion: Usuario, index) => {
        if (usuario.id === usuarioInOrganizacion.id) {
          if (isDeleting) {
            this.organizacion.usuarios.splice(index, 1);
            this.onSubmit(true);
            this.deleteUsuario(usuario);
          } else {
            this.organizacion.usuarios[index] = usuario;
            this.putUsuario(usuario, false);
          }
        }
      });
    }
  }

  putUsuario(usuario: Usuario, isAdding: boolean) {
    this.usuariosService
      .putUsuario(usuario, usuario.id)
      .then(
        () => {
          this.onSubmit(true);
          if (isAdding) {
            this.sendEmailVerificationLink(usuario.email, usuario.id, (usuario.nombre + ' ' + usuario.apellido));
          }
        }
      )
      .catch(
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  deleteUsuario(usuario: Usuario) {
    this.usuariosService
      .deleteUsuario(usuario.id)
      .then(() =>
        this.angularFireAnalytics.logEvent('delete-user', {
          organizationId: this.organizacion.id,
          userId: this.userId
        }))
      .catch(
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  // FIXME: Add this to RC
  sendEmailVerificationLink(email: string, uid: string, user: string) {
    this.authService.sendEmailVerificationLink(email, uid, user)
      .subscribe(
        () => {
          const values = {
            header: 'Usuario añadido con exito',
            message: `Se le ha enviardo un email a ${email} para que active su cuenta. NOTA: Revisar el correo no deseado!`,
            color: 'success',
            duration: 5000
          };
          this.toastService.presentToast(values);
          this.angularFireAnalytics.logEvent('add-user', {
            organizationId: this.organizacion.id,
            userId: this.userId
          });
        },
        (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
      );
  }

  showUserPermitsAlert(usuario: Usuario) {
    const values = {
      header: this.organizationContent.alertShowUserPermitsTitle,
      message: this.organizationContent.alertShowUserPermitsSubTitle,
    };

    this.alertService
      .showChangeUserPermitAlert(
        values, usuario.isActive, usuario.isAdmin,
        this.organizationContent.alertShowUserPermitsButtonYes, this.organizationContent.alertShowUserPermitsButtonNo,
        this.organizationContent.alertShowUserPermitsLabelAdministrador, this.organizationContent.alertShowUserPermitsLabelActivo)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (response: any) => {
          if (response) {
            this.checkedChangedUserPermits(response, usuario);
          }
        },
        (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
      );
  }

  checkedChangedUserPermits(response: any, usuario: Usuario) {
    let claimsHasChanged = false;
    let propertiesHasChanged = false;
    let changedUsuario: Usuario;
    this.loadingService.present();
    // Here we checked if the 'admin' condition has changed.
    if (response.indexOf('isAdmin') > -1 && !usuario.isAdmin
      || response.indexOf('isAdmin') === -1 && usuario.isAdmin) {
      claimsHasChanged = true;
      changedUsuario = {
        ...usuario,
        isAdmin: response.indexOf('isAdmin') > -1,
        hasPaid: true
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      response.indexOf('isAdmin') > -1 ? this.addAdminRole(usuario) : this.removeAdminRole(usuario);
    }
    if (response.indexOf('isActive') > -1 && !usuario.isActive
      || response.indexOf('isActive') === -1 && usuario.isActive) {
      propertiesHasChanged = true;
      changedUsuario = {
        ...usuario,
        isActive: response.indexOf('isActive') > -1,
        hasPaid: true
      };
    }
    if (claimsHasChanged || propertiesHasChanged) {
      this.updateUser(changedUsuario, false);
    } else {
      this.loadingService.dismiss();
    }
  }

  updateUser(usuario: Usuario, isDeleting: boolean) {
    const displayName = usuario.nombre + usuario.apellido;
    this.authService.updateUser(usuario.id, usuario.email, displayName, !usuario.isActive)
      .subscribe(
        () => {
          this.putUsuarioToOrganization(usuario, false, isDeleting);
        },
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  addAdminRole(usuario: Usuario) {
    this.authService.addAdminRole(usuario.id)
      .subscribe(
        () => {
          this.loadingService.dismiss();
        },
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  addHasPaidRole(usuario: Usuario) {
    this.authService.addHasPaidRole(usuario.id)
      .subscribe(
        () => {
          this.loadingService.dismiss();
        },
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  removeAdminRole(usuario: Usuario) {
    this.authService.removeAdminRole(usuario.id)
      .subscribe(
        () => {
          this.loadingService.dismiss();
        },
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  removeUserFromOrganization(usuario: Usuario) {
    const values = {
      header: this.organizationContent.alertRemoveUserTitle,
      message: this.organizationContent.alertRemoveUserSubTitle,
    };

    this.alertService
      .showYesNoAlert(values,
        this.organizationContent.alertRemoveUserButtonYes,
        this.organizationContent.alertRemoveUserButtonNo)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (response: boolean) => {
          if (response) {
            this.putUsuarioToOrganization(usuario, false, true);
          }
        },
        (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
      );
  }

  addPlan() {
    this.router.navigate([`core/payment/${this.userId}`]);
  }

  async removeOrganization() {
    const modal = await this.modalController.create({
      component: RemoveOrganizationModalComponent,
      componentProps: {
        content: this.organizationContent.alertEliminarOrganizacionForm,
        organizationName: this.organizacion.nombre
      }
    });

    await modal.present();
    const response = await modal.onWillDismiss();
    if (response) {
      this.loadingService.present();
      this.deleteOrganizacion();
    }
  }

  deleteOrganizacion() {
    this.organizacionService
      .deleteOrganizacion(this.organizacion.id)
      .then(
        () => {
          this.angularFireAnalytics.logEvent('delete-organization', {
            organizationId: this.organizacion.id,
            userId: this.userId
          });
          this.logout();
        }
      )
      .catch(
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  logout() {
    this.authService.logout()
      .then(
        () => {
          this.loadingService.dismiss();
          const values = {
            header: this.organizationContent.alertOrganizacionEliminadaTitle,
            message: this.organizationContent.alertOrganizacionEliminadaTitle,
            color: 'success',
          };
          this.toastService.presentToast(values);
          this.router.navigate(['/core/goodbye']);
        }
      )
      .catch(
        (error) => {
          this.loadingService.dismiss();
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  async shareDetails() {
    await Share.share({
      title: this.organizationContent.shareDetailsTitle + this.organizacion.nombre,
      text: this.organizationContent.shareDetailsTelefono + this.organizacion.telefonoContacto + '-' + this.organizationContent.shareDetailsEmail + this.organizacion.emailContacto,
      dialogTitle: this.organizationContent.shareDetailsAliasBancario + this.organizacion.alias,
    })
      .then(() => {
        // eslint-disable-next-line no-console
        console.info('Shared successfully');
      })
      .catch((error) => {
        this.toastService.presentErrorToast(error ? error.message : 'Error', false);
      });
  }

  async openCustomDependenciaModal(customDependencia?: Dependencia) {
    const modal = await this.modalController.create({
      component: CustomDependenciaModalComponent,
      componentProps: {
        content: this.organizationContent.alertCustomDependenciaForm,
        customDependencia
      }
    });

    await modal.present();
    const response = await modal.onWillDismiss();
    if (response && response.data) {
      this.manageCustomDependencia(response.data);
    }
  }

  manageCustomDependencia(customDependencia: Dependencia) {
    if (customDependencia.id) {
      this.organizacion.dependencias.forEach((dependencia: Dependencia, i) => {
        if (customDependencia.id === dependencia.id) {
          this.organizacion.dependencias[i] = customDependencia;
        }
      });
    } else {
      const newId = this.angularFirestore.createId();
      const newCustomDependencia: Dependencia = {
        ...customDependencia,
        id: newId
      };
      this.organizacion.dependencias.push(newCustomDependencia);
    }
    this.onSubmit(false);
  }

  onCustomDependenciaDelete(customDependencia: Dependencia) {
    const values = {
      header: this.organizationContent.alertEliminarDependenciaTitle,
      message: this.organizationContent.alertEliminarDependenciaTitle
    };
    this.alertService
      .showYesNoAlert(values,
        this.organizationContent.alertRemoveUserButtonYes,
        this.organizationContent.alertRemoveUserButtonNo)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (response: boolean) => {
          if (response) {
            this.organizacion.dependencias.forEach((dependencia: Dependencia, index) => {
              if (customDependencia.id === dependencia.id) {
                this.organizacion.dependencias.splice(index, 1);
              }
            });
            this.onSubmit(false);
          }
        },
        (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
      );
  }

  async onHelp(event: any) {
    const popover = await this.popoverController.create({
      component: HelpPopoverComponent,
      event,
      translucent: false,
      componentProps: {
        page: 'organizacion',
        card: 'dependencias'
      }
    });
    return await popover.present();
  }

  onBack() {
    this.router.navigate([`core/settings/${this.userId}`]);
  }

  buildUsuariosChartData() {
    this.tiposDeUsuario.forEach(tipo => {
      this.totalUsuariosPorTipo.push({ tipoUsuario: tipo, cantidad: 0 });
    });

    this.estadosDeUsuario.forEach(estado => {
      this.totalUsuariosPorEstado.push({ estadoUsuario: estado, cantidad: 0 });
    });

    this.organizacion.usuarios.forEach(usuario => {
      if (usuario.isAdmin) {
        this.totalUsuariosPorTipo[0].cantidad = this.totalUsuariosPorTipo[0].cantidad + 1;
      } else {
        this.totalUsuariosPorTipo[1].cantidad = this.totalUsuariosPorTipo[1].cantidad + 1;
      }

      if (usuario.isActive) {
        this.totalUsuariosPorEstado[0].cantidad = this.totalUsuariosPorEstado[0].cantidad + 1;
      } else {
        this.totalUsuariosPorEstado[1].cantidad = this.totalUsuariosPorEstado[1].cantidad + 1;
      }
    });
    this.loadUsuariosChart();
  }

  buildStorageChartData() {
    this.tiposDeStorage.forEach(tipo => {
      this.totalStoragePorTipo.push({ tipoStorage: tipo, cantidad: 0 });
    });
    this.totalStoragePorTipo[0].cantidad = this.organizacion.remainingStorage + this.organizacion.extraStorage;
    this.totalStoragePorTipo[1].cantidad = this.organizacion.consumedStorage;
    this.loadStorageChart();
  }

  loadStorageChart() {
    this.storageChart = {
      chartType: 'PieChart',
      dataTable: [
        ['Almacenamiento', 'Espacio'],
      ],
      // opt_firstRowIsData: true,
      options: {
        height: 150,
        pieHole: 0.25,
        pieSliceText: 'value',
        is3D: false,
        legend: {
          position: 'labeled'
        }
      },
    };
    this.totalStoragePorTipo.forEach(totalPorTipo => {
      this.storageChart.dataTable.push([totalPorTipo.tipoStorage, totalPorTipo.cantidad]);
    });
  }

  loadUsuariosChart() {
    this.usuariosPorTipoChart = {
      chartType: 'PieChart',
      dataTable: [
        ['Usuarios', 'Cantidad'],
      ],
      // opt_firstRowIsData: true,
      options: {
        height: 75,
        pieHole: 0.75,
        pieSliceText: 'value',
        is3D: false,
        legend: {
          position: 'labeled'
        }
      },
    };

    this.usuariosPorEstadoChart = {
      chartType: 'PieChart',
      dataTable: [
        ['Usuarios', 'Cantidad'],
      ],
      // opt_firstRowIsData: true,
      options: {
        height: 75,
        pieHole: 0.75,
        pieSliceText: 'value',
        is3D: false,
        legend: {
          position: 'labeled'
        }
      },
    };
    this.totalUsuariosPorTipo.forEach(totalUsuarioPorTipo => {
      this.usuariosPorTipoChart.dataTable.push([totalUsuarioPorTipo.tipoUsuario, totalUsuarioPorTipo.cantidad]);
    });
    this.totalUsuariosPorEstado.forEach(totalUsuarioPorEstado => {
      this.usuariosPorEstadoChart.dataTable.push([totalUsuarioPorEstado.estadoUsuario, totalUsuarioPorEstado.cantidad]);
    });
  }

  navigateToPurchase() {
    this.router.navigate([
      `/core/payment/${this.userId}`,
      {
        storage: true,
      }
    ]);
  }
}
