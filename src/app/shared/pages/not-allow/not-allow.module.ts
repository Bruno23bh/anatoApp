import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotAllowPageRoutingModule } from './not-allow-routing.module';

import { NotAllowPage } from './not-allow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotAllowPageRoutingModule
  ],
  declarations: [NotAllowPage]
})
export class NotAllowPageModule {}
