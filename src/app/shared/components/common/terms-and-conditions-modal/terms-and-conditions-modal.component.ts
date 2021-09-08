import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { GeneralContent } from '../../../interfaces/general-content';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-terms-and-conditions-modal',
  templateUrl: './terms-and-conditions-modal.component.html',
  styleUrls: ['./terms-and-conditions-modal.component.scss'],
})
export class TermsAndConditionsModalComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    private contentService: ContentService
  ) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  generalContent: GeneralContent;

  ngOnInit() {
    this.generalContent = this.contentService.contents.general;
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
