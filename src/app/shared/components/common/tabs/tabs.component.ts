import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Notificacion } from 'src/app/core/interfaces/notificacion';
import { Usuario } from 'src/app/core/interfaces/usuario';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { GeneralContent } from '../../../interfaces/general-content';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit, OnDestroy {
  @Input() activeTab: string;
  @Input() activeNotificacionesFromHome: number;
  usuario: Usuario;
  activeNotifications: Notificacion[] = [];
  unsubscribe: Subject<void> = new Subject();
  generalContent: GeneralContent;

  constructor(
    private router: Router,
    private contentService: ContentService,
    private usuariosService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService) { }

  ngOnInit() {
    this.getUsuario();
    this.generalContent = this.contentService.contents.general;
  }

  getUsuario() {
    this.usuariosService
      .getUsuario(this.activatedRoute.snapshot.params.userId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (usuario: Usuario) => {
          this.usuario = usuario;
          this.activeNotifications = this.usuario.notificaciones ? this.usuario.notificaciones.filter(notification => !notification.read) : [];
        },
        (error) => {
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  itemClicked(item: string) {
    if (item === 'home') {
      this.router.navigate([`core/${item}/${this.usuario.id}`]);
    } else {
      this.router.navigate([`${item}/${this.usuario.id}/${item}`]);
    }

    this.activeNotifications = this.usuario.notificaciones.filter(notification => !notification.read);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
