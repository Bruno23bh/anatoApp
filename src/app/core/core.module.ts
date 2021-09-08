import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IurisUtilsModule } from '../shared/iuris-utils.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    IurisUtilsModule
  ]
})

export class CoreModule { }

