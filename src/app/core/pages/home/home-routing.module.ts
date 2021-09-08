import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';

import { HomePage } from './home.page';

const redirectUnauthorizedToLogIn = () => redirectUnauthorizedTo(['core/login']);
const onlyAllowSelf = (next) => map((user: any) => !!user && next.params.userId === user.uid);

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    ...canActivate(redirectUnauthorizedToLogIn),
    ...canActivate(onlyAllowSelf)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
