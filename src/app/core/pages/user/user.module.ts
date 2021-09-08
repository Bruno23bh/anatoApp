import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';

import { UserFormComponent } from './components/user-form/user-form.component';
import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UserPageRoutingModule,
    IurisUtilsModule,
    SimpleMaskModule
  ],
  declarations: [UserPage, UserFormComponent]
})
export class UserPageModule { }
