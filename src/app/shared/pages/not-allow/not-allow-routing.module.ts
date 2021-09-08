import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { NotAllowPage } from './not-allow.page';

const redirectUnauthorizedToLogIn = () => redirectUnauthorizedTo(['core/login']);

const routes: Routes = [
  {
    path: '',
    component: NotAllowPage,
    ...canActivate(redirectUnauthorizedToLogIn)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotAllowPageRoutingModule { }
