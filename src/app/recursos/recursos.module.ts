import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IurisUtilsModule } from '../shared/iuris-utils.module';
import { RecursosRoutingModule } from './recursos-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RecursosRoutingModule,
    IurisUtilsModule
  ]
})
export class RecursosModule { }
