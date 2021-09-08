import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController) { }

  showYesNoAlert(values: any, yesButton?: string, noButton?: string): Observable<boolean> {
    const showAlertPromise = new Promise<boolean>(async (resolve) => {
      const alert = await this.alertController.create({
        header: values.header,
        message: values.message,
        cssClass: 'alert-yes-no-buttons',
        buttons: [
          {
            text: noButton ? noButton : 'No',
            handler: () => {
              resolve(false);
            }
          },
          {
            text: yesButton ? yesButton : 'Si',
            handler: () => {
              resolve(true);
            }
          }
        ]
      });
      alert.present();
    });
    return from(showAlertPromise);
  }

  showForgotChangePasswordlAlert(values: any): Observable<any> {
    const showEmailPromise = new Promise<string>(async (resolve) => {
      const alert = await this.alertController.create({
        header: values.header,
        subHeader: values.subHeader,
        message: values.message,
        cssClass: 'alert-yes-no-buttons',
        inputs: [
          {
            name: 'email',
            type: 'email',
            placeholder: 'Correo electronico'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve('');
            }
          }, {
            text: 'Solicitar',
            handler: (email) => {
              resolve(email);
            }
          }
        ]
      });
      alert.present();
    });
    return from(showEmailPromise);
  }

  showUserRegistrationAlert(
    values: any, noButton: string, yesButton: string,
    nombrePlaceholder: string, apellidoPlaceholder: string,
    emailPlaceholder: string): Observable<string> {
    const showEmailPromise = new Promise<string>(async (resolve) => {
      const alert = await this.alertController.create({
        header: values.header,
        subHeader: values.subHeader,
        cssClass: 'alert-yes-no-buttons',
        inputs: [
          {
            name: 'nombre',
            type: 'text',
            placeholder: nombrePlaceholder
          },
          {
            name: 'apellido',
            type: 'text',
            placeholder: apellidoPlaceholder
          },
          {
            name: 'email',
            type: 'email',
            placeholder: emailPlaceholder
          },
        ],
        buttons: [
          {
            text: noButton,
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve('');
            }
          }, {
            text: yesButton,
            handler: (response) => {
              resolve(response);
            }
          }
        ]
      });
      alert.present();
    });
    return from(showEmailPromise);
  }

  showChangeUserPermitAlert(
    values: any, isActive: boolean, isAdmin: boolean,
    yesButtonLabel: string, noButtonLabel: string, labelAdministrador: string, lableActivo: string): Observable<string> {
    const showEmailPromise = new Promise<string>(async (resolve) => {
      const alert = await this.alertController.create({
        header: values.header,
        subHeader: values.subHeader,
        message: values.message,
        cssClass: 'alert-yes-no-buttons',
        inputs: [
          {
            name: 'isAdmin',
            type: 'checkbox',
            label: labelAdministrador,
            value: 'isAdmin',
            checked: isAdmin
          },

          {
            name: 'isActive',
            type: 'checkbox',
            label: lableActivo,
            value: 'isActive',
            checked: isActive
          }
        ],
        buttons: [
          {
            text: noButtonLabel,
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve('');
            }
          }, {
            text: yesButtonLabel,
            handler: (response) => {
              resolve(response);
            }
          }
        ]
      });
      alert.present();
    });
    return from(showEmailPromise);
  }

  // async showNoNetworkAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Sin conexion',
  //     subHeader: 'Por favor verfica que tengas conexion a internet.',
  //     message: 'Sin conexion a internet la app no puede funcionar (por el momento...)',
  //   });
  //   alert.present();
  // }

  addLinkResourceAlert(
    values: any, noButton: string, yesButton: string,
    nombrePlaceholder: string, linkPlaceholder: string): Observable<string> {
    const showEmailPromise = new Promise<string>(async (resolve) => {
      const alert = await this.alertController.create({
        header: values.header,
        subHeader: values.subHeader,
        cssClass: 'alert-yes-no-buttons',
        inputs: [
          {
            name: 'nombre',
            type: 'text',
            placeholder: nombrePlaceholder
          },
          {
            name: 'link',
            type: 'text',
            placeholder: linkPlaceholder
          }
        ],
        buttons: [
          {
            text: noButton,
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve('');
            }
          }, {
            text: yesButton,
            handler: (response) => {
              resolve(response);
            }
          }
        ]
      });
      alert.present();
    });
    return from(showEmailPromise);
  }

  editResourceNameAlert(
    values: any, noButton: string, yesButton: string,
    nombrePlaceholder: string): Observable<string> {
    const showEmailPromise = new Promise<string>(async (resolve) => {
      const alert = await this.alertController.create({
        header: values.header,
        subHeader: values.subHeader,
        cssClass: 'alert-yes-no-buttons',
        inputs: [
          {
            name: 'nombre',
            type: 'text',
            placeholder: nombrePlaceholder
          }
        ],
        buttons: [
          {
            text: noButton,
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve('');
            }
          }, {
            text: yesButton,
            handler: (response) => {
              resolve(response);
            }
          }
        ]
      });
      alert.present();
    });
    return from(showEmailPromise);
  }

  addAbonoAlert(
    values: any, noButton: string, yesButton: string,
    cuotasPlaceholder: string, fechaPlaceholder: string): Observable<string> {
    const showEmailPromise = new Promise<string>(async (resolve) => {
      const alert = await this.alertController.create({
        header: values.header,
        subHeader: values.subHeader,
        message: values.message,
        cssClass: 'alert-yes-no-buttons',
        inputs: [
          {
            name: 'cuotas',
            type: 'text',
            placeholder: cuotasPlaceholder
          },
          {
            name: 'fecha',
            type: 'text',
            placeholder: fechaPlaceholder
          }
        ],
        buttons: [
          {
            text: noButton,
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              resolve('');
            }
          }, {
            text: yesButton,
            handler: (response) => {
              resolve(response);
            }
          }
        ]
      });
      alert.present();
    });
    return from(showEmailPromise);
  }
}
