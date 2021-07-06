import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerifericoPage } from './periferico.page';

const routes: Routes = [
  {
    path: '',
    component: PerifericoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerifericoPageRoutingModule {}
