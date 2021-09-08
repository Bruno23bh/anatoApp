import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';

import { CustomDependenciaModalComponent } from './components/custom-dependencia-modal/custom-dependencia-modal.component';
import { OrganizationFormComponent } from './components/organization-form/organization-form.component';
import {
  RemoveOrganizationModalComponent,
} from './components/remove-organization-modal/remove-organization-modal.component';
import { OrganizationPageRoutingModule } from './organization-routing.module';
import { OrganizationPage } from './organization.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IurisUtilsModule,
    SimpleMaskModule,
    OrganizationPageRoutingModule,
    Ng2GoogleChartsModule
  ],
  declarations: [OrganizationPage, OrganizationFormComponent, RemoveOrganizationModalComponent, CustomDependenciaModalComponent],
  entryComponents: [RemoveOrganizationModalComponent, CustomDependenciaModalComponent]
})
export class OrganizationPageModule { }
