import { NgModule } from '@angular/core';
import { canActivate, hasCustomClaim, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';
import { LeaveChangesGuard } from 'src/app/shared/guards/leave-changes.guard';

import { UserPage } from './user.page';

const redirectUnauthorizedToLogIn = () => redirectUnauthorizedTo(['core/login']);

const onlyAllowSelf = (next) => map((user: any) => !!user && next.params.userId === user.uid);

const paidOnly = () => hasCustomClaim('hasPaid');

const routes: Routes = [
  {
    path: '',
    component: UserPage,
    canDeactivate: [LeaveChangesGuard],
    ...canActivate(redirectUnauthorizedToLogIn),
    ...canActivate(onlyAllowSelf)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule { }
