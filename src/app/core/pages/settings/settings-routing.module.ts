import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';

import { SettingsPage } from './settings.page';

const redirectUnauthorizedToLogIn = () => redirectUnauthorizedTo(['core/login']);

const onlyAllowSelf = (next) => map((user: any) => !!user && next.params.userId === user.uid);

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
    ...canActivate(redirectUnauthorizedToLogIn),
    ...canActivate(onlyAllowSelf)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule { }
