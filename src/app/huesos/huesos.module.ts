import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HuesosPageRoutingModule } from './huesos-routing.module';

import { HuesosPage } from './huesos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HuesosPageRoutingModule
  ],
  declarations: [HuesosPage]
})
export class HuesosPageModule { }

