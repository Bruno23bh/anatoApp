import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { Notificacion } from 'src/app/core/interfaces/notificacion';
import { Usuario } from 'src/app/core/interfaces/usuario';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-notifications-modal',
  templateUrl: './notifications-modal.component.html',
  styleUrls: ['./notifications-modal.component.scss'],
})
export class NotificationsModalComponent implements OnInit {
  @Input() usuario: Usuario;
  showNoNotificationsMessageForActiveNotifications: boolean;
  showNoNotificationsMessageForInactiveNotifications: boolean;
  activeNotifications: Notificacion[] = [];
  inactiveNotifications: Notificacion[] = [];
  readNotifications: Notificacion[] = [];
  activeSegment: string;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    if (this.usuario) {
      this.initializeNotificaciones();
      this.activeSegment = 'activas';
    }
  }

  initializeNotificaciones() {
    this.activeNotifications = this.usuario.notificaciones ? this.usuario.notificaciones.filter(notification => !notification.read) : [];
    this.inactiveNotifications = this.usuario.notificaciones ? this.usuario.notificaciones.filter(notification => notification.read) : [];
    this.inactiveNotifications = this.inactiveNotifications.sort((n1: Notificacion, n2: Notificacion) => moment(n2.fecha, 'DD/MM/YYYY').diff(moment(n1.fecha, 'DD/MM/YYYY')));
    this.showNoNotificationsMessageForActiveNotifications = this.activeNotifications.length === 0 ? true : false;
    this.showNoNotificationsMessageForInactiveNotifications = this.inactiveNotifications.length === 0 ? true : false;
  }

  changeSegment(event: any) {
    this.activeSegment = event.detail.value;
  }

  dismiss() {
    this.modalController.dismiss(this.usuario ? this.usuario.notificaciones : []);
  }

  goToEntity(notification: Notificacion) {
    this.dismiss();
    this.router.navigate([
      `casos/${this.usuario.id}/casos/${notification.entityId}`,
      {
        clienteId: `${notification.clienteId}`,
      }
    ]);
  }

  markedAsRead(notification: Notificacion) {
    if (this.usuario) {
      this.usuario.notificaciones.forEach((inactiveNotificacion, i) => {
        if (this.usuario.notificaciones[i].titulo === notification.titulo) {
          this.usuario.notificaciones[i].read = true;
        }
      });
      this.initializeNotificaciones();
      const values: any = {
        message: 'Notificacion marcada como leida',
        color: 'success',
      };
      this.toastService.presentToast(values);
    }
  }

}
