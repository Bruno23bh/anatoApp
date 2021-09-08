import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { SettingsContent } from 'src/app/shared/interfaces/settings-content';
import { ContentService } from 'src/app/shared/services/content.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import {
  TermsAndConditionsModalComponent,
} from '../../../shared/components/common/terms-and-conditions-modal/terms-and-conditions-modal.component';
import { Usuario } from '../../interfaces/usuario';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {
  usuario: Usuario;
  unsubscribe: Subject<void> = new Subject();
  settingsContent: SettingsContent;
  version = '0.0.183';

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contentService: ContentService,
    private toastService: ToastService,
    private modalController: ModalController) {
  }

  ngOnInit() {
    this.usuario = this.activatedRoute.snapshot.data.usuario;
    this.settingsContent = this.contentService.contents.settings;
  }

  goToUser() {
    this.router.navigate([`/core/users/${this.usuario.id}`]);
  }

  goToOrganizacion() {
    this.router.navigate([`/core/${this.usuario.id}/organizacion/${this.usuario.organizacionId}`]);
  }

  goToFaq() {
    this.router.navigate([`/core/faq`]);
  }

  goToPayment() {
    this.router.navigate([`/core/payment/${this.usuario.id}/`]);
  }

  async onTerminosCondiciones() {
    const modal = await this.modalController.create({
      component: TermsAndConditionsModalComponent
    });

    await modal.present();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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

  onBack() {
    this.router.navigate([`core/home/${this.usuario.id}`]);
  }

  // updateModels() {
  //   this.authService.updateModels()
  //     .subscribe(
  //       () => {
  //         console.info('Model updated')
  //       },
  //       (error) => {
  //         this.toastService.presentErrorToast(error ? error.message : 'Error');
  //       }
  //     );
  // }
}
