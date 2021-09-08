/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { get } from 'scriptjs';
import DateUtils from 'src/app/shared/helpers/date.helper';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { Plan } from '../../interfaces/plan';
import { Usuario } from '../../interfaces/usuario';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit, OnDestroy {
  preference: any;
  unsubscribe: Subject<void> = new Subject();
  selectedStorage = 0;
  selectedPlan: Plan = {
    referenciaId: '',
    cantidadMeses: 0,
    fechaDesde: '',
    fechaHasta: '',
    nombre: '',
  };
  total = 0;
  totalStorage = 0;
  precioPorMes: number;
  usuario: Usuario;
  precioPorHora: number;
  descuento: number;
  activeSegment: string;
  // FIXME: Add to RC
  tabs: {
    name: string;
    icon: string;
    disabled: boolean;
  }[] = [];

  constructor(
    private checkoutService: CheckoutService,
    private toastService: ToastService,
    private loadingService: LoadingService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usuario = this.activatedRoute.snapshot.data.usuario;
    const isStorageOnly = this.activatedRoute.snapshot.paramMap && this.activatedRoute.snapshot.paramMap.get('storage') ? true : false;
    this.tabs = [{ name: 'Licencia', icon: 'trophy-outline', disabled: isStorageOnly }, { name: 'Almacenamiento', icon: 'cloud-circle-outline', disabled: false }];
    this.activeSegment = isStorageOnly ? 'Almacenamiento' : 'Licencia';
    this.loadMercadoPago();
  }

  loadMercadoPago() {
    get('https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js', () => { });
  }

  callMercadoPago(storage: boolean) {
    this.loadingService.present();
    this.preference = {
      // FIXME: Tenemos que ver si mercado pago nos paga todo el dinero o si lo podemos cobrar en cuotas.
      // payment_methods: {
      //   installments: 1
      // },
      items: [{
        title: storage ? `Iuris-${this.selectedStorage}-GB almacenamiento extra` : `Iuris-${this.selectedPlan.nombre}-${this.selectedPlan.cantidadMeses}`,
        unit_price: storage ? Number(`${this.totalStorage}`) : Number(`${this.total}`),
        quantity: 1,
      }],
      back_urls: {
        success: `https://dev-iuris.web.app/core/payment-successful`,
        failure: `https://dev-iuris.web.app/core/payment-failure`
      },
      external_reference: `${this.usuario.organizacionId}-${this.usuario.id}-${this.selectedStorage}`,
      auto_return: 'all',
    };
    this.checkoutService
      .paymentCheckout(this.preference)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (response: any) => {
          this.loadingService.dismiss();
          window.open(response.result, '_self');
        },
        (error) => {
          this.toastService.presentErrorToast(error ? error.message : 'Error');
          this.loadingService.dismiss();
        }
      );
  }

  changeSegment(event: any) {
    this.activeSegment = event.detail.value;
  }

  planSelected(nombre: string) {
    this.selectedPlan.nombre = nombre;
    switch (nombre) {
      case 'basic':
        this.precioPorHora = 2;
        break;
      case 'premium':
        this.precioPorHora = 3;
        break;
      case 'gold':
        this.precioPorHora = 5;
        break;
    }
    this.calculatePurchase();
  }

  storageSelected(storage: number) {
    this.selectedStorage = storage;
    this.calculateStoragePurchase();
  }

  timeSelected(meses: number) {
    this.selectedPlan.cantidadMeses = meses;
    switch (meses) {
      case 1:
        this.descuento = 0;
        break;
      case 6:
        this.descuento = 25;
        break;
      case 12:
        this.descuento = 50;
        break;
    }
    this.calculatePurchase();
  }

  calculatePurchase() {
    if (this.selectedPlan.cantidadMeses !== 0 && this.precioPorHora !== 0) {
      this.total = 0;
      const today = DateUtils.formatDateToDDMMYYY(new Date().toISOString().split('T')[0]);
      this.selectedPlan.fechaDesde = today;
      // FIXME: Agregar el descuento en funcion de los dias que tenga a favor la org.
      this.selectedPlan.fechaHasta = moment(DateUtils.formatDateToDDMMYYY(new Date().toISOString().split('T')[0]), 'DD/MM/YYYY').add((this.selectedPlan.cantidadMeses * 30), 'days').format('DD/MM/YYYY');
      const precioPorDia = this.precioPorHora * 24;
      const precioTotalSinDescuento = precioPorDia * 30;
      this.precioPorMes = this.selectedPlan.cantidadMeses * precioTotalSinDescuento;
      const descuento = (this.precioPorMes * this.descuento) / 100;
      this.total = this.usuario.licence !== 'gratis' ? this.precioPorMes - descuento : this.precioPorMes - descuento - ((this.precioPorMes - descuento) / 2);
    }
  }

  calculateStoragePurchase() {
    if (this.selectedStorage !== 0) {
      // FIXME: Add this to the RC
      switch (this.selectedStorage) {
        case 1:
          this.totalStorage = 250;
          break;
        case 3:
          this.totalStorage = 500;
          break;
        case 5:
          this.totalStorage = 750;
          break;
      }
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
