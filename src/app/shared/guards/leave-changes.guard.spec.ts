import { inject, TestBed } from '@angular/core/testing';

import { LeaveChangesGuard } from './leave-changes.guard';

describe('LeaveChangesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveChangesGuard]
    });
  });

  it('should canDeactivate', inject([LeaveChangesGuard], (guard: LeaveChangesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
