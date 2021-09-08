import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';

import { SelectEntitiesContent } from '../../../interfaces/select-entities-content';
import { ContentService } from '../../../services/content.service';

const MIN_SEARCH_CHARACTERS = 3;

@Component({
  selector: 'app-entities-modal',
  templateUrl: './entities-modal.component.html',
  styleUrls: ['./entities-modal.component.scss'],
})

export class EntitiesModalComponent implements OnInit, OnDestroy {
  @Input() entities: any[] = [];
  @Input() searchFirstParameter: string;
  @Input() searchSecondParameter: string;
  @Input() allowCustom: boolean;
  @Input() customEntities: any[] = [];
  loadedEntities: any[] = [];
  loadedCustomEntities: any[] = [];
  searchValue = '';
  unsubscribe: Subject<void> = new Subject();
  showNoEntitiesMessage: boolean;
  showNoCustomEntitiesMessage: boolean;

  selectEntitiesModalContent: SelectEntitiesContent;
  activeSegment: string;

  constructor(
    private modalController: ModalController,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.loadedEntities = this.entities;
    this.loadedCustomEntities = this.customEntities;
    this.showNoEntitiesMessage = this.entities.length === 0 ? true : false;
    this.showNoCustomEntitiesMessage = this.customEntities.length === 0 ? true : false;
    this.selectEntitiesModalContent = this.contentService.contents.selectEntitiesModal;
    this.activeSegment = 'Precargadas';
    this.initializeEntities();
  }

  dismiss(entity?: any) {
    this.modalController.dismiss({
      entity: entity ? entity : null,
    });
  }

  initializeEntities(): void {
    if (this.activeSegment === 'Precargadas') {
      this.entities = this.loadedEntities;
    } else {
      this.customEntities = this.loadedCustomEntities;
    }
  }

  filterEntities(event: any) {
    this.showNoEntitiesMessage = true;
    this.initializeEntities();
    this.searchValue = event.target.value;
    if (!this.searchValue || event.target.value.length < MIN_SEARCH_CHARACTERS) {
      return;
    }
    if (this.activeSegment === 'Precargadas') {
      this.entities = this.entities.filter(entity => {
        if (this.searchFirstParameter || this.searchSecondParameter) {
          if (entity[this.searchFirstParameter] && entity[this.searchSecondParameter] && this.searchValue) {
            if (entity[this.searchFirstParameter].toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1
              || entity[this.searchSecondParameter].toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1
            ) {
              return true;
            }
            return false;
          }
        } else if (entity && this.searchValue) {
          if (entity.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }

      });
    } else {
      this.customEntities = this.customEntities.filter(entity => {
        if (this.searchFirstParameter || this.searchSecondParameter) {
          if (entity[this.searchFirstParameter] && entity[this.searchSecondParameter] && this.searchValue) {
            if (entity[this.searchFirstParameter].toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1
              || entity[this.searchSecondParameter].toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1
            ) {
              return true;
            }
            return false;
          }
        } else if (entity && this.searchValue) {
          if (entity.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }

      });
    }
  }

  ionViewDidLeave() {
    this.searchValue = '';
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  changeSegment(event: any) {
    this.activeSegment = event.detail.value;
  }
}
