import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPage } from './not-found.page';

const redirectUnauthorizedToLogIn = () => redirectUnauthorizedTo(['core/login']);

const routes: Routes = [
  {
    path: '',
    component: NotFoundPage,
    ...canActivate(redirectUnauthorizedToLogIn)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundPageRoutingModule { }
