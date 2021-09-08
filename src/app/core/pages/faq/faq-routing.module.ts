import { NgModule } from '@angular/core';
import { canActivate, hasCustomClaim, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';

import { FaqPage } from './faq.page';

const redirectUnauthorizedToLogIn = () => redirectUnauthorizedTo(['core/login']);

const onlyAllowSelf = (next) => map((user: any) => !!user && next.params.userId === user.uid);

const paidOnly = () => hasCustomClaim('hasPaid');

const routes: Routes = [
  {
    path: '',
    component: FaqPage,
    ...canActivate(redirectUnauthorizedToLogIn),
    ...canActivate(onlyAllowSelf),
    ...canActivate(paidOnly)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqPageRoutingModule { }
