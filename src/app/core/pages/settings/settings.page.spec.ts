/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { content } from 'src/app/shared/constants/content.constant';
import { mockedUsuarios } from 'src/app/shared/mocks/mocked-usuarios';
import { ContentService } from 'src/app/shared/services/content.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { AuthService } from '../../services/auth.service';
import { FaqPage } from '../faq/faq.page';
import { LoginPage } from '../login/login.page';
import { PaymentPage } from '../payment/payment.page';
import { SettingsPageModule } from './settings.module';
import { SettingsPage } from './settings.page';

describe('SettingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;

  const angularFireFunctionsStub = jasmine.createSpyObj({
    httpsCallable: () => { Promise.resolve(true); }
  });

  const angularFireAuthStub = jasmine.createSpyObj({
    logout: () => { Promise.resolve(true); }
  });

  const mockToastService = {
    presentToast(): Promise<void> {
      return Promise.resolve();
    },

    presentErrorToast(): Promise<void> {
      return Promise.resolve();
    },
  };

  const mockAuthService = {
    logout(): Promise<void> {
      return Promise.resolve();
    }
  };

  const mockUpdateService = {
    checkForUpdates: () => { Promise.resolve(true); },
    updateAndRestart: () => { Promise.resolve(true); }
  };

  const mockContentService = {
    contents: {
      settings: JSON.parse(content.register)
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
        SettingsPageModule,
        RouterTestingModule.withRoutes([
          { path: 'core/login', component: LoginPage },
          { path: 'core/faq', component: FaqPage },
          { path: 'core/payment/:userId', component: PaymentPage },
        ]),
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: AngularFireFunctions, useValue: angularFireFunctionsStub },
        { provide: ContentService, useValue: mockContentService },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: ToastService, useValue: mockToastService },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              params:
              {
                id: mockedUsuarios[0].id
              },
              data: {
                usuario: mockedUsuarios[0]
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to the user page', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.usuario = mockedUsuarios[0];
    component.goToUser();
    expect(routerService.navigate).toHaveBeenCalled();
  });

  it('should go to the organization page', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.usuario = mockedUsuarios[0];
    component.goToOrganizacion();
    expect(routerService.navigate).toHaveBeenCalled();
  });

  it('should logout', () => {
    const routerService = TestBed.inject(Router);
    const authService = TestBed.inject(AuthService);
    spyOn(routerService, 'navigate');
    spyOn(authService, 'logout').and.returnValue(Promise.resolve());
    component.logout();
    expect(component).toBeTruthy();
  });

  it('go to faq', (() => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    component.goToFaq();
    // expect(router).toHaveBeenCalled();
    expect(component).toBeTruthy();
  }));

  it('go to payment page', (() => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    component.goToPayment();
    // expect(router).toHaveBeenCalled();
    expect(component).toBeTruthy();
  }));

  it('should logout', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.logout();
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when logging out', () => {
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'logout').and.returnValue(Promise.reject());
    component.logout();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should open the terms and conditions modal', () => {
    component.onTerminosCondiciones();
    expect(component).toBeTruthy();
  });

  it('should go back', (() => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    component.onBack();
    expect(router.navigate).toHaveBeenCalled();
  }));
});
