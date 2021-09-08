/* eslint-disable @typescript-eslint/naming-convention */
import { TestBed } from '@angular/core/testing';
import { AngularFireFunctions } from '@angular/fire/functions';
import { mockedUsuarios } from 'src/app/shared/mocks/mocked-usuarios';

import { CheckoutService } from './checkout.service';

const angularFireFunctionsStub = jasmine.createSpyObj({
  httpsCallable: () => { Promise.resolve(true); }
});

describe('CheckoutService', () => {
  let checkoutService: CheckoutService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFireFunctions, useValue: angularFireFunctionsStub },
    ]
  })
  );

  it('should be created', () => {
    const service: CheckoutService = TestBed.inject(CheckoutService);
    expect(service).toBeTruthy();
  });

  it('should do the payment checkout', () => {
    const angularFireFunctions = TestBed.inject(AngularFireFunctions);
    checkoutService = TestBed.inject(CheckoutService);
    const preference = {
      items: [{
        title: `Iuris-basic-1`,
        unit_price: 1440,
        quantity: 1,
      }],
      back_urls: {
        success: `https://dev-iuris.web.app/core/payment-successful`,
        failure: `https://dev-iuris.web.app/core/payment-failure`
      },
      external_reference: `${mockedUsuarios[0].organizacionId}-${mockedUsuarios[0].id}`,
      auto_return: 'all',
    };
    checkoutService.paymentCheckout(preference);
    expect(angularFireFunctions.httpsCallable).toHaveBeenCalled();
  });

  it('should validate the payment', () => {
    const angularFireFunctions = TestBed.inject(AngularFireFunctions);
    checkoutService = TestBed.inject(CheckoutService);
    const preference = {
      items: [{
        title: `Iuris-basic-1`,
        unit_price: 1440,
        quantity: 1,
      }],
      back_urls: {
        success: `https://dev-iuris.web.app/core/payment-successful`,
        failure: `https://dev-iuris.web.app/core/payment-failure`
      },
      external_reference: `${mockedUsuarios[0].organizacionId}-${mockedUsuarios[0].id}`,
      auto_return: 'all',
    };
    checkoutService.validatePayment(preference);
    expect(angularFireFunctions.httpsCallable).toHaveBeenCalled();
  });
});
