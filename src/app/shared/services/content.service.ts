import { Injectable } from '@angular/core';
import { AngularFireRemoteConfig, filterFresh } from '@angular/fire/remote-config';
import { first } from 'rxjs/operators';

import { AppContent } from '../interfaces/app-content';

/* eslint-disable no-underscore-dangle */
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public contents: AppContent = {
    faq: null,
    caso: null,
    casos: null,
    cliente: null,
    clientes: null,
    cuota: null,
    expediente: null,
    home: null,
    login: null,
    movimiento: null,
    pago: null,
    pagos: null,
    settings: null,
    turno: null,
    recursos: null,
    uploadFiles: null,
    selectEntitiesModal: null,
    tarea: null,
    selectDependencia: null,
    selectCliente: null,
    organization: null,
    user: null,
    register: null,
    notFound: null,
    notAllow: null,
    thanks: null,
    general: null,
    goodbye: null
  };

  constructor(private angularFireRemoteConfig: AngularFireRemoteConfig) { }

  async updateContent() {
    this.angularFireRemoteConfig.parameters
      .pipe(
        filterFresh(172_800_000), // ensure we have values from at least 48 hours ago
        first())
      .subscribe(
        (contents: any) => {
          contents.forEach(content => {
            switch (content.key) {
              case 'faq':
                this.contents.faq = JSON.parse(content._value);
                break;
              case 'caso':
                this.contents.caso = JSON.parse(content._value);
                break;
              case 'casos':
                this.contents.casos = JSON.parse(content._value);
                break;
              case 'cliente':
                this.contents.cliente = JSON.parse(content._value);
                break;
              case 'clientes':
                this.contents.clientes = JSON.parse(content._value);
                break;
              case 'cuota':
                this.contents.cuota = JSON.parse(content._value);
                break;
              case 'expediente':
                this.contents.expediente = JSON.parse(content._value);
                break;
              case 'home':
                this.contents.home = JSON.parse(content._value);
                break;
              case 'login':
                this.contents.login = JSON.parse(content._value);
                break;
              case 'movimiento':
                this.contents.movimiento = JSON.parse(content._value);
                break;
              case 'tarea':
                this.contents.tarea = JSON.parse(content._value);
                break;
              case 'pago':
                this.contents.pago = JSON.parse(content._value);
                break;
              case 'pagos':
                this.contents.pagos = JSON.parse(content._value);
                break;
              case 'settings':
                this.contents.settings = JSON.parse(content._value);
                break;
              case 'turno':
                this.contents.turno = JSON.parse(content._value);
                break;
              case 'recursos':
                this.contents.recursos = JSON.parse(content._value);
                break;
              case 'uploadFiles':
                this.contents.uploadFiles = JSON.parse(content._value);
                break;
              case 'selectEntitiesModal':
                this.contents.selectEntitiesModal = JSON.parse(content._value);
                break;
              case 'selectDependenciaComponent':
                this.contents.selectDependencia = JSON.parse(content._value);
                break;
              case 'selectClienteComponent':
                this.contents.selectCliente = JSON.parse(content._value);
                break;
              case 'organization':
                this.contents.organization = JSON.parse(content._value);
                break;
              case 'user':
                this.contents.user = JSON.parse(content._value);
                break;
              case 'register':
                this.contents.register = JSON.parse(content._value);
                break;
              case 'notFound':
                this.contents.notFound = JSON.parse(content._value);
                break;
              case 'notAllow':
                this.contents.notAllow = JSON.parse(content._value);
                break;
              case 'thanks':
                this.contents.thanks = JSON.parse(content._value);
                break;
              case 'general':
                this.contents.general = JSON.parse(content._value);
                break;
              case 'goodbye':
                this.contents.goodbye = JSON.parse(content._value);
                break;
            }
          });
        },
        (error) => { console.error(error); }
      );
  }
}
