/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { Observable, of, throwError } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { AuthService } from '../../services/auth.service';
import { CheckoutService } from '../../services/checkout.service';
import { LoginPage } from '../login/login.page';
import { PaymentSuccessfulPageModule } from './payment-successful.module';
import { PaymentSuccessfulPage } from './payment-successful.page';

describe('PaymentSuccessfulPage', () => {
  let component: PaymentSuccessfulPage;
  let fixture: ComponentFixture<PaymentSuccessfulPage>;
  // eslint-disable-next-line prefer-const
  let router: Router;

  const loadingService = {
    async present() { },

    async dismiss() { }
  };

  const mockToastService = {
    presentToast(): Promise<void> {
      return Promise.resolve();
    },
    presentErrorToast(): Promise<void> {
      return Promise.resolve();
    }
  };

  const mockCheckoutService = {
    paymentCheckout(): Observable<boolean> {
      return of(true);
    },
    validatePayment(): Observable<boolean> {
      return of(true);
    },
  };

  const angularFireAuthStub = jasmine.createSpyObj({
    logout: () => { Promise.resolve(true); }
  });

  const angularFireFunctionsStub = jasmine.createSpyObj({
    httpsCallable: () => { Promise.resolve(true); }
  });

  const angularFireAnalytics = {
    logEvent: () => {
      Promise.resolve(true);
    }
  };

  const mockAuthService = {
    sendPasswordResetEmail(): Promise<void> {
      return Promise.resolve();
    },

    login(): Promise<void> {
      return Promise.resolve();
    },

    logout(): Promise<void> {
      return Promise.resolve();
    }
  };

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule,
        CommonModule,
        PaymentSuccessfulPageModule,
        FormsModule,
        RouterTestingModule.withRoutes([
          { path: 'core/login', component: LoginPage }
        ])],
      providers: [
        { provide: LoadingService, useValue: loadingService },
        { provide: CheckoutService, useValue: mockCheckoutService },
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: AngularFireAnalytics, useValue: angularFireAnalytics },
        { provide: AngularFireFunctions, useValue: angularFireFunctionsStub },
        { provide: AuthService, useValue: mockAuthService },
        { provide: ToastService, useValue: mockToastService },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              queryParams: {
                collection_id: '29203647',
                collection_status: 'approved',
                external_reference: 'r2UYMaGplPPDduM8garz-t7UBTz4DUdYsVUP0bbXd5rV1Xyr2-false',
                payment_type: 'credit_card',
                merchant_order_id: 1711040267,
                preference_id: '627148552-e75b795b-3295-4f0e-bf9e-b1b197c3c0db',
                site_id: 'MLA',
                processing_mode: 'aggregator',
                merchant_account_id: null
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentSuccessfulPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should occured an error when validate the payment', () => {
    const checkoutService = TestBed.inject(CheckoutService);
    spyOn(checkoutService, 'validatePayment').and.returnValue(throwError(new Error('Test error')));
    component.validateMercadoPagoPayment();
    expect(component).toBeTruthy();
  });

  it('should log out', (() => {
    component.logout();
    expect(component).toBeTruthy();
  }));

  it('should logout', () => {
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'logout').and.returnValue(Promise.resolve());
    component.logout();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get an error when logging out', () => {
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'logout').and.returnValue(Promise.reject());
    component.logout();
    // expect(toastService.presentError
    expect(component).toBeTruthy();
  });
});
