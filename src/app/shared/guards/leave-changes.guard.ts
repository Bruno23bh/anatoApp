import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { ILeaveChangesGuard } from './leave-changes-guard.interface';

@Injectable({
  providedIn: 'root'
})

export class LeaveChangesGuard implements CanDeactivate<ILeaveChangesGuard> {
  canDeactivate(
    component: ILeaveChangesGuard
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
