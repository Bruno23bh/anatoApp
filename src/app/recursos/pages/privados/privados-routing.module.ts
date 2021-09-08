import { NgModule } from '@angular/core';
import { canActivate, hasCustomClaim, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';

import { PrivadosPage } from './privados.page';

const redirectUnauthorizedToLogIn = () => redirectUnauthorizedTo(['core/login']);

const onlyAllowSelf = (next) => map((user: any) => !!user && next.params.userId === user.uid);

const paidOnly = () => hasCustomClaim('hasPaid');

const adminOnly = () => hasCustomClaim('admin');

const routes: Routes = [
  {

    path: '',
    component: PrivadosPage,
    ...canActivate(redirectUnauthorizedToLogIn),
    ...canActivate(onlyAllowSelf),
    ...canActivate(paidOnly),
    ...canActivate(adminOnly),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivadosPageRoutingModule { }
