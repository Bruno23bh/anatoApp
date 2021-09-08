import { NgModule } from '@angular/core';
import { canActivate, hasCustomClaim, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';
import { LeaveChangesGuard } from 'src/app/shared/guards/leave-changes.guard';

import { OrganizationPage } from './organization.page';

const redirectUnauthorizedToLogIn = () => redirectUnauthorizedTo(['core/login']);

const onlyAllowSelf = (next) => map((user: any) => !!user && next.params.userId === user.uid);

const adminOnly = () => hasCustomClaim('admin');

const paidOnly = () => hasCustomClaim('hasPaid');

const routes: Routes = [
  {
    path: '',
    component: OrganizationPage,
    canDeactivate: [LeaveChangesGuard],
    ...canActivate(redirectUnauthorizedToLogIn),
    ...canActivate(onlyAllowSelf),
    ...canActivate(adminOnly),
    ...canActivate(paidOnly)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationPageRoutingModule { }
