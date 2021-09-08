import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';

import { NormativasPageRoutingModule } from './normativas-routing.module';
import { NormativasPage } from './normativas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NormativasPageRoutingModule,
    IurisUtilsModule
  ],
  declarations: [NormativasPage]
})
export class NormativasPageModule { }
