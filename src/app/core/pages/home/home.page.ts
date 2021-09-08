import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentService } from 'src/app/shared/services/content.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { Notificacion } from '../../interfaces/notificacion';
import { Usuario } from '../../interfaces/usuario';
import { AuthService } from '../../services/auth.service';
import { NotificationsService } from '../../services/notifications.service';
import { ThemeService } from '../../services/theme.service';
import { UpdateService } from '../../services/update.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  items: {
    theme: string;
    icon: string;
    url?: string;
  }[] = [];

  copyItems: {
    theme: string;
    icon: string;
    url?: string;
  }[] = [];

  showHelpCard = true;
  usuario: Usuario;
  unsubscribe: Subject<void> = new Subject();
  showPwaUseMessage = false;
  showLicenceMessage = false;
  activeNotifications: Notificacion[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService,
    private themeService: ThemeService,
    private toastService: ToastService,
    private router: Router,
    private notificationsService: NotificationsService,
    private usuariosService: UsuariosService,
    private platform: Platform,
    private authService: AuthService,
    private loadingService: LoadingService,
    private modalController: ModalController,
    public updateService: UpdateService
  ) { }

  ngOnInit() {
    this.usuario = this.activatedRoute.snapshot.data.usuario;
    this.updateService.checkForUpdates();
    if (this.usuario) {
      this.setPreferences();
    }
    this.loadItems();
  }

  loadItems() {
    this.items = [
      {
        theme: 'Tronco',
        icon: 'albums-outline',
        url: '/quizs'
      },
      {
        theme: 'Miembro superior',
        icon: 'ellipsis-vertical-outline',
        url: '/quizs'
      },
      {
        theme: 'Esplacnología',
        icon: 'heart-outline',
        url: '/quizs'
      },
      {
        theme: 'Miembro Inferior',
        icon: 'footsteps-outline',
        url: '/quizs'
      },
      {
        theme: 'Sistema Nervioso Central',
        icon: 'git-pull-request-outline',
        url: '/quizs'
      },

    ];
    this.copyItems = this.items;
  }

  setPreferences() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.usuario.colorTheme === 'dark' ? this.themeService.enableDark() : this.themeService.enableLight();
    if (this.usuario.licence === 'gratis' || !this.usuario.hasPaid) {
      this.showLicenceMessage = true;
    }
    const isPWAInstalledOnDesktop: boolean = document.getElementsByClassName('plt-pwa').length > 0;
    if ((!this.platform.is('pwa') && this.platform.is('mobile')) || (!isPWAInstalledOnDesktop && this.platform.is('desktop'))) {
      this.showPwaUseMessage = true;
    }
    if (this.usuario.allowNotifications) {
      this.requestPermission();
    }

    if (!this.usuario.isActive && !this.usuario.isAdmin) {
      this.logout();
    }

  }

  // checkCustomClaims() {
  //   this.authService
  //     .showCustomClaim()
  //     .then(
  //       (response: any) => {
  //         console.log(response);
  //       },
  //     )
  //     .catch(
  //       (error) => {
  //         this.loadingService.dismiss();
  //         this.toastService.presentErrorToast(error ? error.message : 'Error');
  //       }
  //     );
  // }

  getUsuario() {
    this.usuariosService
      .getUsuario(this.activatedRoute.snapshot.params.userId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (usuario: Usuario) => {
          this.usuario = usuario;
          // eslint-disable-next-line max-len
          this.activeNotifications = this.usuario.notificaciones ? this.usuario.notificaciones.filter(notification => !notification.read) : [];
        },
        (error) => { this.toastService.presentErrorToast(error ? error.message : 'Error'); }
      );
  }

  logout() {
    this.authService.logout()
      .then(
        () => {
          this.loadingService.dismiss();
          const values = {
            header: 'El usuario no se encuentra habilitado',
            message: 'Por favor habilite el usuario para que pueda utilizar la app',
            color: 'danger',
          };
          this.toastService.presentToast(values);
          this.router.navigate(['/core/login']);
        }
      )
      .catch(
        (error) => {
          this.loadingService.dismiss();
          // this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  requestPermission() {
    this.notificationsService.requestPermission()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        () => {
          this.getToken();
        },
        (error) => {
          console.error(error ? error.message : 'Error');
        }
      );
  }

  getToken() {
    this.notificationsService.requestToken()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (token: string) => {
          this.updateUsuarioTokens(token);
        },
        (error) => {
          this.toastService.presentErrorToast(error ? error.message : 'Error');
        }
      );
  }

  updateUsuarioTokens(token: string) {
    if (this.usuario.tokens && this.usuario.tokens.indexOf(token) === -1 || (this.usuario.tokens && this.usuario.tokens.length === 0)) {
      this.usuario.tokens.push(token);
      this.putUsuario(this.usuario);
    }
  }

  putUsuario(usuario: Usuario) {
    this.usuariosService
      .putUsuario(usuario, usuario.id)
      .then(() => {
        this.usuario = usuario;
        this.activeNotifications = this.usuario.notificaciones.filter(notification => !notification.read);
      })
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

  closePwaMessage() {
    this.showPwaUseMessage = false;
  }

  closeFreeMessage() {
    this.showLicenceMessage = false;
  }

  updateAndRestart() {
    if (this.updateService.isUpdateAvailable) {
      this.updateService.updateAndRestart();
    }
  }

  onCloseHelpCardClick() {
    this.showHelpCard = false;
  }

  inicilizarItems() {
    this.items = this.copyItems;
  }

  onSearchChange(event) {
    const textoIngresado: string = event.detail.value;
    this.inicilizarItems();
    if (textoIngresado.length >= 3) {
      console.log(textoIngresado);
      console.log(this.items.length);
      this.items = this.items.filter(item => item.theme.toLowerCase().indexOf(textoIngresado.toLowerCase()) > -1);
    }
  }
}
