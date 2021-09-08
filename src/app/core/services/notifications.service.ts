import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireMessaging } from '@angular/fire/messaging';

import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private angularFireMessaging: AngularFireMessaging,
    private angularFireFunctions: AngularFireFunctions) { }

  requestPermission() {
    return this.angularFireMessaging.requestPermission;
  }

  requestToken() {
    return this.angularFireMessaging.requestToken;
  }

  deleteToken(token: string) {
    return this.angularFireMessaging.deleteToken(token);
  }

  sendNotification(usuario: Usuario, notification: any) {
    return this.angularFireFunctions.httpsCallable('sendNotification')({ usuario, notification });
  }

}
