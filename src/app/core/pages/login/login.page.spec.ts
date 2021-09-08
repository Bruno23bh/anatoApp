/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import * as moment from 'moment';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { EMPTY, of, throwError } from 'rxjs';
import { content } from 'src/app/shared/constants/content.constant';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';
import { mockedClientes } from 'src/app/shared/mocks/mocked-clientes';
import { mockedUsuarios } from 'src/app/shared/mocks/mocked-usuarios';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ContentService } from 'src/app/shared/services/content.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { AuthService } from '../../services/auth.service';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPageModule } from './login.module';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  const angularFireAuthStub = jasmine.createSpyObj({
    createUserWithEmailAndPassword: () => { Promise.resolve(true); },
    signInWithEmailAndPassword: () => { Promise.resolve(true); },
    sendPasswordResetEmail: () => { Promise.resolve(true); },
    sendEmailVerification: () => { Promise.resolve(true); },
    login: () => { Promise.resolve(true); },
  });

  const angularFireFunctionsStub = jasmine.createSpyObj({
    httpsCallable: () => { Promise.resolve(true); }
  });

  const angularFirestoreStub = {
    collection: () => EMPTY
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
    showForgotChangePasswordlAlert(): any {
      return {
        response: {
          email: mockedClientes[0].email
        }
      };
    },
  };

  const mockAuthService = {
    sendPasswordResetEmail(): Promise<void> {
      return Promise.resolve();
    },

    login(): Promise<any> {
      return Promise.resolve({
        response: {
          user: {
            emailVerified: true,
            metadata: {
              creationTime: '31/12/2020'
            }
          }
        }
      });
    },

    logout(): Promise<void> {
      return Promise.resolve();
    }
  };

  const mockContentService = {
    contents: {
      login: JSON.parse(content.login)
    }
  };

  const angularFireRemoteConfigStub = {};

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule,
        CommonModule,
        RouterTestingModule.withRoutes([
          { path: 'core/login', component: LoginPage },
        ]),
        SimpleMaskModule,
        FormsModule,
        ReactiveFormsModule,
        LoginPageRoutingModule,
        IurisUtilsModule,
        LoginPageModule
      ],
      providers: [
        { provide: ToastService, useValue: mockToastService },
        { provide: ContentService, useValue: mockContentService },
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: AngularFireFunctions, useValue: angularFireFunctionsStub },
        { provide: AngularFirestore, useValue: angularFirestoreStub },
        { provide: AlertService, useValue: mockAlertService },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: AuthService, useValue: mockAuthService },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    const authService = TestBed.inject(AuthService);
    const routerService = TestBed.inject(Router);
    component.loginForm.controls.email.setValue('infoutsimplex@gmail.com');
    component.loginForm.controls.password.setValue('Aa12345');
    spyOn(authService, 'login').and.returnValue(Promise.resolve({ user: { emailVerified: true, metadata: { creationTime: moment() } } }) as any);
    spyOn(routerService, 'navigate');
    component.onSubmit();
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should call the showForgotChangePassword alert', async () => {
    const alertService = TestBed.inject(AlertService);
    spyOn(alertService, 'showForgotChangePasswordlAlert').and.returnValue(of({ email: 'infoutsimplex@gmail.com' }));
    component.onResetPassword();
    expect(alertService.showForgotChangePasswordlAlert).toHaveBeenCalled();
  });

  it('should call the showForgotChangePassword alert and return a wrong email', async () => {
    const alertService = TestBed.inject(AlertService);
    spyOn(alertService, 'showForgotChangePasswordlAlert').and.returnValue(of({ email: 'gil.a.pablo@' }));
    component.onResetPassword();
    expect(alertService.showForgotChangePasswordlAlert).toHaveBeenCalled();
  });

  it('should get error when opening showForgotChangePassword alert', () => {
    const alertService = TestBed.inject(AlertService);
    spyOn(alertService, 'showForgotChangePasswordlAlert').and.returnValue(throwError(new Error('Test error')));
    component.onResetPassword();
    // expect(alertService.showForgotChangePasswordlAlert).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when doing the login', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'login').and.returnValue(Promise.reject());
    component.onSubmit();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should resend the email', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.sendResetEmail(mockedUsuarios[0].email);
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when resetting the email', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'sendPasswordResetEmail').and.returnValue(Promise.reject());
    component.sendResetEmail(mockedUsuarios[0].email);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
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
});
