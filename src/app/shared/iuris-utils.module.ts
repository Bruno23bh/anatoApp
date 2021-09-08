import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
    NotificationsModalComponent,
} from 'src/app/shared/components/common/notifications-modal/notifications-modal.component';

import { EntitiesModalComponent } from './components/business/entities-modal/entities-modal.component';
import { SelectDependenciaComponent } from './components/business/select-dependencia/select-dependencia.component';
import { CalendarButtonComponent } from './components/common/calendar-button/calendar-button.component';
import { HelpPopoverComponent } from './components/common/help-popover/help-popover.component';
import { SkeletonComponent } from './components/common/skeleton/skeleton.component';
import { SmallInfoCardComponent } from './components/common/small-info-card/small-info-card.component';
import { TabsComponent } from './components/common/tabs/tabs.component';
import {
    TermsAndConditionsModalComponent,
} from './components/common/terms-and-conditions-modal/terms-and-conditions-modal.component';
import { UploadFilesComponent } from './components/common/upload-files/upload-files.component';
import { AgePipe } from './pipes/age.pipe';
import { ToUpperCasePipe } from './pipes/toUppercase.pipe';

@NgModule({
  declarations: [
    EntitiesModalComponent,
    NotificationsModalComponent,
    AgePipe,
    ToUpperCasePipe,
    SkeletonComponent,
    UploadFilesComponent,
    SelectDependenciaComponent,
    SmallInfoCardComponent,
    HelpPopoverComponent,
    TermsAndConditionsModalComponent,
    TabsComponent,
    CalendarButtonComponent
  ],
  entryComponents: [EntitiesModalComponent, NotificationsModalComponent, HelpPopoverComponent, TermsAndConditionsModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    AgePipe,
    ToUpperCasePipe,
    SkeletonComponent,
    SmallInfoCardComponent,
    UploadFilesComponent,
    SelectDependenciaComponent,
    TabsComponent,
    CalendarButtonComponent
  ]
})
export class IurisUtilsModule { }
