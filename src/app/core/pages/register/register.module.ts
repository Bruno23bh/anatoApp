import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';

import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    IurisUtilsModule
  ],
  declarations: [RegisterPage, RegisterFormComponent]
})
export class RegisterPageModule { }
