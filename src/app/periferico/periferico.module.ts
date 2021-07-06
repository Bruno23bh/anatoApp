import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerifericoPageRoutingModule } from './periferico-routing.module';

import { PerifericoPage } from './periferico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerifericoPageRoutingModule
  ],
  declarations: [PerifericoPage]
})
export class PerifericoPageModule {}
