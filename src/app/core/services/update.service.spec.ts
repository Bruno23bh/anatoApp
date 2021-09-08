import { TestBed } from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';

import { UpdateService } from './update.service';

describe('UpdateService', () => {

  let updateService: UpdateService;

  const mockFSwUpdate = {};

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    TestBed.configureTestingModule({
      providers: [
        { provide: SwUpdate, useValue: mockFSwUpdate },
      ]
    }),
      updateService = TestBed.inject(UpdateService);
  });

  it('should be created', () => {
    expect(updateService).toBeTruthy();
  });
});
