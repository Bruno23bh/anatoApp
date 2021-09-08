import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(
    private angularFireFunctions: AngularFireFunctions
  ) { }

  paymentCheckout(preference: any) {
    return this.angularFireFunctions.httpsCallable('registerMercardoPago')(preference);
  }

  validatePayment(preference: any) {
    return this.angularFireFunctions.httpsCallable('registermercardopagopayment')(preference);
  }
}
