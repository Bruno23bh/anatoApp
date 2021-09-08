import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';

import { ThanksPageRoutingModule } from './thanks-routing.module';
import { ThanksPage } from './thanks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThanksPageRoutingModule,
    IurisUtilsModule
  ],
  declarations: [ThanksPage]
})
export class ThanksPageModule { }
