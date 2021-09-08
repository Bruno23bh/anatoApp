import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast.service';

import { AuthService } from '../../services/auth.service';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.page.html',
  styleUrls: ['./payment-successful.page.scss'],
})
export class PaymentSuccessfulPage implements OnInit, OnDestroy {
  unsubscribe: Subject<void> = new Subject();
  mercadoPagoReferenceParams: any;
  organizationIdFromMercadoPago: string;
  usuarioIdFromMercadoPago: string;
  storageFromMercadoPago: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private checkoutService: CheckoutService,
    private toastService: ToastService,
    private router: Router,
    private authService: AuthService,
    private angularFireAnalytics: AngularFireAnalytics
  ) { }

  ngOnInit() {
    this.mercadoPagoReferenceParams = this.activatedRoute.snapshot.queryParams;
    this.organizationIdFromMercadoPago = this.activatedRoute.snapshot.queryParams.external_reference.split(['-'], 2)[0];
    this.usuarioIdFromMercadoPago = this.activatedRoute.snapshot.queryParams.external_reference.split(['-'], 2)[1];
    this.storageFromMercadoPago = this.activatedRoute.snapshot.queryParams.external_reference.split(['-'])[2];
    this.validateMercadoPagoPayment();
  }

  validateMercadoPagoPayment() {
    this.checkoutService
      .validatePayment({
        organizationId: this.organizationIdFromMercadoPago,
        id: this.mercadoPagoReferenceParams.collection_id,
        storage: this.storageFromMercadoPago
      })
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.angularFireAnalytics.logEvent('purchase-organization', {
          referenceId: this.mercadoPagoReferenceParams,
          organizationId: this.organizationIdFromMercadoPago,
          userId: this.usuarioIdFromMercadoPago
        });
      },
        (error) => {
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  logout() {
    this.authService.logout()
      .then(
        () => {
          this.router.navigate(['/core/login']);
        }
      )
      .catch(
        (error) => {
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
