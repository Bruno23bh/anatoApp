import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';

import { PrivadosPageRoutingModule } from './privados-routing.module';
import { PrivadosPage } from './privados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivadosPageRoutingModule,
    IurisUtilsModule
  ],
  declarations: [PrivadosPage]
})
export class PrivadosPageModule { }
