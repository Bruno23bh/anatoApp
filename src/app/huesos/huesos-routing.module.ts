import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HuesosPage } from './huesos.page';

const routes: Routes = [
  {
    path: '',
    component: HuesosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HuesosPageRoutingModule { }
