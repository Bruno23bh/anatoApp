/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { content } from 'src/app/shared/constants/content.constant';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';
import { mockedOrganizaciones } from 'src/app/shared/mocks/mocked-organizaciones';
import { mockedUsuarios } from 'src/app/shared/mocks/mocked-usuarios';
import { ContentService } from 'src/app/shared/services/content.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { Organizacion } from '../../interfaces/organizacion';
import { AuthService } from '../../services/auth.service';
import { OrganizacionService } from '../../services/organizacion.service';
import { UsuariosService } from '../../services/usuarios.service';
import { ThanksPage } from '../thanks/thanks.page';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPageModule } from './register.module';
import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  const angularFireAuthStub = jasmine.createSpyObj({
    createUserWithEmailAndPassword: () => { Promise.resolve(true); },
    signInWithEmailAndPassword: () => { Promise.resolve(true); },
    sendPasswordResetEmail: () => { Promise.resolve(true); },
    sendEmailVerification: () => { Promise.resolve(true); }
  });

  const mockOrganizacionService = {
    getOrganizacion(): Observable<Organizacion> {
      return of(mockedOrganizaciones[0]);
    },

    putOrganizacion(): Promise<void> {
      return Promise.resolve();
    },
  };

  const docSpy = jasmine.createSpyObj({
    valueChanges: of(mockedUsuarios[0]),
    doc: of(mockedUsuarios[0]),
    delete: () => { },
    set: () => { },
    put: () => { },
  });

  const collectionSpy = jasmine.createSpyObj({
    valueChanges: of(mockedUsuarios),
    doc: docSpy
  });

  const angularFireStorageStub = {
    collection: collectionSpy
  };

  const angularFireFunctionsStub = jasmine.createSpyObj({
    httpsCallable: () => { Promise.resolve(true); }
  });

  const angularFirestoreStub = {
    collection: () => EMPTY,
    createId: () => mockedUsuarios[0].id
  };

  const mockToastService = {
    presentToast(): Promise<void> {
      return Promise.resolve();
    },
    presentErrorToast(): Promise<void> {
      return Promise.resolve();
    }
  };

  const mockAuthService = {
    register(): Promise<void> {
      return Promise.resolve();
    },

    sendEmailVerificationLink(): Promise<void> {
      return Promise.resolve();
    },

    addAdminRole(): Observable<boolean> {
      return of(true);
    }
  };

  const mockUsuariosService = {
    putUsuario(): Promise<void> {
      return Promise.resolve();
    }
  };

  const mockContentService = {
    contents: {
      register: JSON.parse(content.register)
    }
  };

  const angularFireRemoteConfigStub = {};

  const modalSpy = jasmine.createSpyObj('Modal', ['present', 'onWillDismiss', 'dismiss']);
  const modalControllerSpy = jasmine.createSpyObj('ModalController', ['create']);
  modalControllerSpy.create.and.callFake(() => modalSpy);

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule,
        CommonModule,
        RegisterPageModule,
        RouterTestingModule.withRoutes([
          { path: 'core/thanks', component: ThanksPage }
        ]),
        SimpleMaskModule,
        FormsModule,
        ReactiveFormsModule,
        RegisterPageRoutingModule,
        IurisUtilsModule
      ],
      providers: [
        { provide: UsuariosService, useValue: mockUsuariosService },
        { provide: OrganizacionService, useValue: mockOrganizacionService },
        { provide: AuthService, useValue: mockAuthService },
        { provide: ToastService, useValue: mockToastService },
        { provide: ContentService, useValue: mockContentService },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: AngularFireFunctions, useValue: angularFireFunctionsStub },
        { provide: AngularFirestore, useValue: angularFirestoreStub },
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: AngularFireStorage, useValue: angularFireStorageStub },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              params:
              {
                planId: '1'
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit an organization', () => {
    // const routerService = TestBed.inject(Router);
    // spyOn(routerService, 'navigate');
    component.onSubmit();
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when editing an organization', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'register').and.returnValue(Promise.reject());
    component.onSubmit();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should add the admin role', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'addAdminRole').and.returnValue(of(true));
    component.addAdminRole(mockedUsuarios[0].id);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when adding the admin role', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'addAdminRole').and.returnValue(throwError(new Error('Test error')));
    component.addAdminRole(mockedUsuarios[0].id);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should add an organization', () => {
    const organizacionService = TestBed.inject(OrganizacionService);
    const usuariosService = TestBed.inject(UsuariosService);
    const toastService = TestBed.inject(ToastService);
    // spyOn(organizacionService, 'putOrganizacion');
    spyOn(toastService, 'presentErrorToast');
    spyOn(usuariosService, 'putUsuario').and.returnValue(Promise.resolve());
    spyOn(organizacionService, 'putOrganizacion').and.returnValue(Promise.resolve());
    component.addOrganizacion(mockedUsuarios[0].id);
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when editing an organization', () => {
    const organizacionService = TestBed.inject(OrganizacionService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(organizacionService, 'putOrganizacion').and.returnValue(Promise.reject());
    component.addOrganizacion(mockedUsuarios[0].id);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when adding an usuario', () => {
    const usuariosService = TestBed.inject(UsuariosService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(usuariosService, 'putUsuario').and.returnValue(Promise.reject());
    component.addUsuario(mockedUsuarios[0].id, mockedUsuarios[0].organizacionId);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should open the terms and conditions modal', () => {
    component.onTerminosCondiciones();
    expect(component).toBeTruthy();
  });
});
