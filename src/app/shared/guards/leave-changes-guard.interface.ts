import { Observable } from 'rxjs';

export interface ILeaveChangesGuard {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
