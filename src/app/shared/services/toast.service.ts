import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { from } from 'rxjs';

import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController,
    private errorService: ErrorService) { }

  presentInviteToast(values: any) {
    const showFreeUsageBannerToastPromise = new Promise<boolean>(async (resolve) => {
      const toast = await this.toastController.create({
        color: values.color,
        position: values.position,
        message: values.message,
        cssClass: 'tabs-bottom',
        buttons: [
          {
            side: 'end',
            text: values.mainButtonText,
            handler: () => {
              resolve(true);
            }
          }, {
            text: 'Cerrar',
            role: 'cancel',
            handler: () => {
              resolve(false);
            }
          }
        ]
      });
      toast.present();
    });
    return from(showFreeUsageBannerToastPromise);
  }

  async presentToast(values: any) {
    const toast = await this.toastController.create({
      color: values.color,
      header: values.header,
      message: values.message,
      cssClass: 'tabs-bottom',
      duration: values.duration ? values.duration : 2500
    });
    toast.present();
  }

  async presentErrorToast(message: any, avoidSentryReport?: boolean) {
    if (!avoidSentryReport) {
      this.errorService.handleError(message);
    }
    const toast = await this.toastController.create({
      color: 'danger',
      header: 'Error',
      message,
      cssClass: 'tabs-bottom',
      duration: 2500
    });
    toast.present();
  }
}
