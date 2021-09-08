/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireFunctions } from '@angular/fire/functions';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { Observable, of, throwError } from 'rxjs';
import { mockedUsuarios } from 'src/app/shared/mocks/mocked-usuarios';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { CheckoutService } from '../../services/checkout.service';
import { PaymentPage } from './payment.page';

describe('PaymentPage', () => {
  let component: PaymentPage;
  let fixture: ComponentFixture<PaymentPage>;

  const angularFireFunctionsStub = jasmine.createSpyObj({
    httpsCallable: () => { Promise.resolve(true); }
  });

  const mockCheckoutService = {
    paymentCheckout(): Observable<boolean> {
      return of(true);
    },
    validatePayment(): Observable<boolean> {
      return of(true);
    },
  };

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

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [PaymentPage],
      imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterTestingModule],
      providers: [
        { provide: AngularFireFunctions, useValue: angularFireFunctionsStub },
        { provide: CheckoutService, useValue: mockCheckoutService },
        { provide: ToastService, useValue: mockToastService },
        { provide: LoadingService, useValue: loadingService },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              data: {
                usuario: mockedUsuarios[0]
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a plan (basic - 1 month)', () => {
    component.planSelected('basic');
    component.timeSelected(1);
    expect(component.total).toEqual(720);
  });

  it('should select a plan (premium - 6 months)', () => {
    component.planSelected('premium');
    component.timeSelected(6);
    expect(component.total).toEqual(4860);
  });

  it('should select a plan (gold - 12 months)', () => {
    component.planSelected('gold');
    component.timeSelected(12);
    expect(component.total).toEqual(10800);
  });

  it('should call mercado pago', () => {
    const checkoutService = TestBed.inject(CheckoutService);
    component.planSelected('gold');
    component.timeSelected(12);
    spyOn(checkoutService, 'paymentCheckout').and.returnValue(of(true));
    component.callMercadoPago(true);
    expect(component).toBeTruthy();
  });

  it('should get an error when calling mercado pago', () => {
    const checkoutService = TestBed.inject(CheckoutService);
    component.planSelected('gold');
    component.timeSelected(12);
    spyOn(checkoutService, 'paymentCheckout').and.returnValue(throwError(new Error('Test error')));
    component.callMercadoPago(true);
    expect(component).toBeTruthy();
  });
});
