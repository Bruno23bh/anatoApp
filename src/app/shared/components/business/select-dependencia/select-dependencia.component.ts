import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { Dependencia } from 'src/app/core/interfaces/dependencia';
import {
  CustomDependenciaModalComponent,
} from 'src/app/core/pages/organization/components/custom-dependencia-modal/custom-dependencia-modal.component';
import { OrganizationContent } from 'src/app/shared/interfaces/organization-content';
import { SelectDependenciasContent } from 'src/app/shared/interfaces/select-dependencia-content';
import { ContentService } from 'src/app/shared/services/content.service';

import { EntitiesModalComponent } from '../entities-modal/entities-modal.component';

@Component({
  selector: 'app-select-dependencia',
  templateUrl: './select-dependencia.component.html',
  styleUrls: ['./select-dependencia.component.scss'],
})
export class SelectDependenciaComponent implements OnInit, OnDestroy {
  @Input() tipo: string;
  @Input() required: boolean;
  @Input() dependencia: Dependencia;
  @Input() customDependencias: Dependencia[];
  @Output() valueChange = new EventEmitter<any>();
  unsubscribe: Subject<void> = new Subject();

  contentSelectDependencia: SelectDependenciasContent;
  organizationContent: OrganizationContent;

  constructor(
    private modalController: ModalController,
    private contentService: ContentService,
    private angularFirestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.contentSelectDependencia = this.contentService.contents.selectDependencia;
    this.organizationContent = this.contentService.contents.organization;
  }

  async searchDependencias() {
    const modal = await this.modalController.create({
      component: EntitiesModalComponent,
      componentProps: {
        entities: this.contentSelectDependencia ? this.contentSelectDependencia.dependencias : null,
        searchFirstParameter: 'nombre',
        searchSecondParameter: 'organismo',
        allowCustom: true,
        customEntities: this.customDependencias
      }
    });

    await modal.present();
    const response = await modal.onWillDismiss();
    if (response && response.data) {
      this.dependencia = response.data.entity;
      this.emitDependencia(response.data.entity, false);
    }
  }

  emitDependencia(dependencia: Dependencia, isNew: boolean) {
    const finalDependencia: {
      dependencia: Dependencia;
      isNew: boolean;
    } = {
      dependencia,
      isNew
    };
    this.valueChange.emit(finalDependencia);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  async openCustomDependenciaModal(customDependencia?: Dependencia) {
    const modal = await this.modalController.create({
      component: CustomDependenciaModalComponent,
      componentProps: {
        content: this.organizationContent.alertCustomDependenciaForm,
        customDependencia
      }
    });

    await modal.present();
    const response = await modal.onWillDismiss();
    if (response && response.data) {
      this.manageCustomDependencia(response.data);
    }
  }

  manageCustomDependencia(customDependencia: Dependencia) {
    const newId = this.angularFirestore.createId();
    const newCustomDependencia: Dependencia = {
      ...customDependencia,
      id: newId
    };
    this.emitDependencia(newCustomDependencia, true);
  }
}
