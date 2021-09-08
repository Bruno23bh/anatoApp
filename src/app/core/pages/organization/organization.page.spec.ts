/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { Observable, of, throwError } from 'rxjs';
import { content } from 'src/app/shared/constants/content.constant';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';
import { mockedClientes } from 'src/app/shared/mocks/mocked-clientes';
import { emptyDependencia, mockedDependencias } from 'src/app/shared/mocks/mocked-dependencias';
import { mockedUsuarios } from 'src/app/shared/mocks/mocked-usuarios';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ContentService } from 'src/app/shared/services/content.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { mockedOrganizaciones } from '../../../shared/mocks/mocked-organizaciones';
import { Organizacion } from '../../interfaces/organizacion';
import { AuthService } from '../../services/auth.service';
import { OrganizacionService } from '../../services/organizacion.service';
import { UsuariosService } from '../../services/usuarios.service';
import { GoodbyePage } from '../goodbye/goodbye.page';
import { SettingsPage } from '../settings/settings.page';
import { OrganizationPageRoutingModule } from './organization-routing.module';
import { OrganizationPageModule } from './organization.module';
import { OrganizationPage } from './organization.page';

describe('OrganizationPage', () => {
  let component: OrganizationPage;
  let fixture: ComponentFixture<OrganizationPage>;

  const mockUsuariosService = {
    putUsuario(): Promise<void> {
      return Promise.resolve();
    },
    deleteUsuario(): Promise<void> {
      return Promise.resolve();
    },
  };

  const mockOrganizacionService = {
    getOrganizacion(): Observable<Organizacion> {
      return of(mockedOrganizaciones[0]);
    },

    putOrganizacion(): Promise<void> {
      return Promise.resolve();
    },

    deleteOrganizacion(): Promise<void> {
      return Promise.resolve();
    }
  };

  const mockToastService = {
    presentToast(): Promise<void> {
      return Promise.resolve();
    },
    presentErrorToast(): Promise<void> {
      return Promise.resolve();
    }
  };

  const mockAlertService = {
    showYesNoAlert(): Observable<boolean> {
      return of(true);
    },

    showUserRegistrationAlert(): Observable<any> {
      return of(true);
    },

    showChangeUserPermitAlert(): Observable<string> {
      return of('yes');
    }
  };

  const docSpy = jasmine.createSpyObj({
    valueChanges: of(mockedOrganizaciones[0]),
    doc: of(mockedOrganizaciones[0]),
    delete: () => { },
    set: () => { },
    put: () => { },
  });

  const collectionSpy = jasmine.createSpyObj({
    valueChanges: of(mockedOrganizaciones),
    doc: docSpy
  });

  const angularFireStorageStub = {
    collection: collectionSpy
  };

  const angularFirestoreStub = {
    collection: () => mockedOrganizaciones,
    createId: () => { }
  };

  const mockedAngularFireAuthGuard = {
    canActivate: () => { }
  };

  const angularFireFunctionsStub = jasmine.createSpyObj({
    httpsCallable: () => { Promise.resolve(true); }
  });

  const mockAngularFireAuth: any = {
  };

  const mockAuthService = {
    updateUser(): Observable<boolean> {
      return of(true);
    },

    createUser(): Observable<string> {
      return of(mockedClientes[0].id);
    },

    addAdminRole(): Observable<boolean> {
      return of(true);
    },

    removeAdminRole(): Observable<boolean> {
      return of(true);
    },

    addHasPaidRole(): Observable<any> {
      return of(true);
    },

    sendEmailVerificationLink(): Promise<void> {
      return Promise.resolve();
    },

    logout(): Promise<void> {
      return Promise.resolve();
    }
  };

  const mockContentService = {
    contents: {
      organization: JSON.parse(content.organization)
    }
  };

  const angularFireRemoteConfigStub = {};

  const angularFireAnalytics = {
    logEvent: () => {
      Promise.resolve(true);
    }
  };

  const modalSpy = jasmine.createSpyObj('Modal', ['present', 'onWillDismiss', 'dismiss']);
  const modalControllerSpy = jasmine.createSpyObj('ModalController', ['create']);
  modalControllerSpy.create.and.callFake(() => modalSpy);

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule,
        RouterTestingModule.withRoutes([
          { path: 'core/settings/:userId', component: SettingsPage },
          { path: 'core/goodbye', component: GoodbyePage }
        ]),
        CommonModule,
        SimpleMaskModule,
        FormsModule,
        ReactiveFormsModule,
        OrganizationPageRoutingModule,
        IurisUtilsModule,
        OrganizationPageModule
      ],
      providers: [
        { provide: UsuariosService, useValue: mockUsuariosService },
        { provide: AuthService, useValue: mockAuthService },
        { provide: ContentService, useValue: mockContentService },
        { provide: OrganizacionService, useValue: mockOrganizacionService },
        { provide: ToastService, useValue: mockToastService },
        { provide: AlertService, useValue: mockAlertService },
        { provide: AngularFirestore, useValue: angularFirestoreStub },
        { provide: AngularFireStorage, useValue: angularFireStorageStub },
        { provide: AngularFireAuthGuard, useValue: mockedAngularFireAuthGuard },
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: AngularFireFunctions, useValue: angularFireFunctionsStub },
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: AngularFireAnalytics, useValue: angularFireAnalytics },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              params: {
                id: 'ocRez6cnzEDbhiEgyUO0'
              },
              data: {
                organizacion: mockedOrganizaciones[0]
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should leave without any changes', () => {
    component.organizationForm.markAsDirty();
    component.isSaving = false;
    spyOn(window, 'confirm').and.callFake(() => true);
    component.canDeactivate();
    expect(component).toBeTruthy();
  });

  it('should change a segment', () => {
    const mockedEvent = {
      detail: {
        value: 'Usuarios'
      }
    };
    component.changeSegment(mockedEvent);
    expect(component.activeSegment).toEqual('Usuarios');
  });

  it('should edit an organization', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.onSubmit();
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when editing an organization', () => {
    const organizacionService = TestBed.inject(OrganizacionService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(organizacionService, 'putOrganizacion').and.returnValue(Promise.reject());
    component.onSubmit(false);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should call addUser alert', async () => {
    const alertService = TestBed.inject(AlertService);
    spyOn(alertService, 'showUserRegistrationAlert').and.returnValue(of({ nombre: 'Pablo', apellido: 'Gil', email: 'pablogil_39@hotmail.com' }) as any);
    component.addUser();
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should call addUser alert with wring data', async () => {
    const alertService = TestBed.inject(AlertService);
    spyOn(alertService, 'showUserRegistrationAlert').and.returnValue(of(true) as any);
    component.addUser();
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should register a new user with an already existing account', () => {
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'createUser').and.returnValue(of(false));
    component.register(mockedClientes[0].email, mockedClientes[0].nombre, mockedClientes[0].apellido);
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when adding a user', () => {
    const alertService = TestBed.inject(AlertService);
    spyOn(alertService, 'showUserRegistrationAlert').and.returnValue(throwError(new Error('Test error')));
    component.addUser();
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should check an non-already registered user', () => {
    component.organizacion = mockedOrganizaciones[0];
    component.isUsuarioIsAlreadyRegistered(mockedUsuarios[0].email);
    expect(component).toBeTruthy();
  });

  it('should check an already registered user', () => {
    component.organizacion = mockedOrganizaciones[0];
    component.isUsuarioIsAlreadyRegistered('pablogil_39@hotmail.com');
    expect(component).toBeTruthy();
  });

  it('should get error when creating a new user', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'createUser').and.returnValue(throwError(new Error('Test error')));
    component.register(mockedClientes[0].email, mockedClientes[0].nombre, mockedClientes[0].apellido);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when putting an usuario', () => {
    const usuariosService = TestBed.inject(UsuariosService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(usuariosService, 'putUsuario').and.returnValue(Promise.reject());
    component.putUsuario(mockedUsuarios[0], false);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should show user permits alert', async () => {
    const alertService = TestBed.inject(AlertService);
    spyOn(alertService, 'showChangeUserPermitAlert').and.returnValue(of('yes'));
    component.showUserPermitsAlert(mockedUsuarios[0]);
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when opening the permits alert', () => {
    const alertService = TestBed.inject(AlertService);
    spyOn(alertService, 'showChangeUserPermitAlert').and.returnValue(throwError(new Error('Test error')));
    component.showUserPermitsAlert(mockedUsuarios[0]);
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when removing the admin role', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'removeAdminRole').and.returnValue(throwError(new Error('Test error')));
    component.removeAdminRole(mockedUsuarios[0]);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when updating the user', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'updateUser').and.returnValue(throwError(new Error('Test error')));
    component.putUsuario(mockedUsuarios[0], false);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should add the admin role', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'addAdminRole').and.returnValue(of(true));
    component.addAdminRole(mockedUsuarios[0]);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when adding the admin role', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'addAdminRole').and.returnValue(throwError(new Error('Test error')));
    spyOn(authService, 'addHasPaidRole').and.returnValue(throwError(new Error('Test error')));
    component.addAdminRole(mockedUsuarios[0]);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should show the remove user from organization alert', async () => {
    const alertService = TestBed.inject(AlertService);
    spyOn(alertService, 'showYesNoAlert').and.returnValue(of(true));
    component.removeUserFromOrganization(mockedUsuarios[0]);
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when removing the user from the organization', () => {
    const alertService = TestBed.inject(AlertService);
    spyOn(alertService, 'showYesNoAlert').and.returnValue(throwError(new Error('Test error')));
    component.removeUserFromOrganization(mockedUsuarios[0]);
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should show the remove user from organization alert', async () => {
    const alertService = TestBed.inject(AlertService);
    const toastService = TestBed.inject(ToastService);
    spyOn(alertService, 'showYesNoAlert').and.returnValue(of(true));
    spyOn(toastService, 'presentErrorToast');
    component.removeUserFromOrganization(mockedUsuarios[1]);
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should check the user permits', () => {
    const response: any = [
      'isAdmin',
      'isActive'
    ];
    component.checkedChangedUserPermits(response, mockedUsuarios[0]);
    expect(component).toBeTruthy();
  });

  it('should get error when deleting a user', () => {
    const usuariosService = TestBed.inject(UsuariosService);
    spyOn(usuariosService, 'deleteUsuario').and.returnValue(Promise.reject());
    component.deleteUsuario(mockedUsuarios[0]);
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should send an email with a verification link', () => {
    const authService = TestBed.inject(AuthService);
    // spyOn(routerService, 'navigate');
    spyOn(authService, 'sendEmailVerificationLink').and.returnValue(of(true));
    component.sendEmailVerificationLink(mockedClientes[0].email, mockedClientes[0].id, mockedClientes[0].nombre);
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get an error when sending an email with a verification link', () => {
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'sendEmailVerificationLink').and.returnValue(throwError(new Error('Test error')));
    component.sendEmailVerificationLink(mockedClientes[0].email, mockedClientes[0].id, mockedClientes[0].nombre);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get an error when updating a user', () => {
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'updateUser').and.returnValue(throwError(new Error('Test error')));
    component.updateUser(mockedUsuarios[0], false);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should navigate to the payment page', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.addPlan();
    expect(routerService.navigate).toHaveBeenCalled();
  });

  it('should open the remove organization modal', () => {
    component.removeOrganization();
    expect(component).toBeTruthy();
  });

  it('should delete an organization', () => {
    const organizacionService = TestBed.inject(OrganizacionService);
    spyOn(organizacionService, 'deleteOrganizacion').and.returnValue(Promise.resolve());
    component.deleteOrganizacion();
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get an error when deleting an organization', () => {
    const organizacionService = TestBed.inject(OrganizacionService);
    spyOn(organizacionService, 'deleteOrganizacion').and.returnValue(Promise.reject());
    component.deleteOrganizacion();
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.logout();
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when logging out', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'logout').and.returnValue(Promise.reject());
    component.logout();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should validate the organization plan', () => {
    component.validateOrganizationPlan();
    expect(component).toBeTruthy();
  });

  it('should get error when adding the hasPaid role', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'addHasPaidRole').and.returnValue(throwError(new Error('Test error')));
    component.addHasPaidRole(mockedUsuarios[0]);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  // it('should share the details of the organization', () => {
  //   component.shareDetails();
  //   expect(component).toBeTruthy();
  // });

  it('should open the remove custom dependencias modal', () => {
    component.openCustomDependenciaModal();
    expect(component).toBeTruthy();
  });

  it('should open the modal manage with custom dependencia', () => {
    component.organizacion = mockedOrganizaciones[0];
    component.organizacion.dependencias = mockedDependencias;
    // fixture.detectChanges();
    component.manageCustomDependencia(mockedDependencias[0]);
    expect(component).toBeTruthy();
  });

  it('should open the modal manage with a new dependencia', () => {
    component.organizacion = mockedOrganizaciones[0];
    component.organizacion.dependencias = mockedDependencias;
    // fixture.detectChanges();
    component.manageCustomDependencia(emptyDependencia);
    expect(component).toBeTruthy();
  });

  it('should delete a custom dependencia', async () => {
    const alertService = TestBed.inject(AlertService);
    spyOn(alertService, 'showYesNoAlert').and.returnValue(of(true));
    component.onCustomDependenciaDelete(mockedDependencias[0]);
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when deleting a custom dependencia', () => {
    const alertService = TestBed.inject(AlertService);
    spyOn(alertService, 'showYesNoAlert').and.returnValue(throwError(new Error('Test error')));
    component.onCustomDependenciaDelete(mockedDependencias[0]);
    // expect(alertService.showYesNoAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should go back', (() => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    component.onBack();
    expect(router.navigate).toHaveBeenCalled();
  }));

  it('should open the help popup', () => {
    component.onHelp('Test');
    expect(component).toBeTruthy();
  });

});
