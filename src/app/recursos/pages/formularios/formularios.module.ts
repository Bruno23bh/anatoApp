import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IurisUtilsModule } from '../../../shared/iuris-utils.module';
import { FormulariosPageRoutingModule } from './formularios-routing.module';
import { FormulariosPage } from './formularios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulariosPageRoutingModule,
    IurisUtilsModule
  ],
  declarations: [FormulariosPage]
})
export class FormulariosPageModule { }
