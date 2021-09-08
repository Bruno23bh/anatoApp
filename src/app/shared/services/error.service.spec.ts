import { TestBed } from '@angular/core/testing';

import { ErrorService } from './error.service';

describe('ErrorService', () => {
  let errorService: ErrorService;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    TestBed.configureTestingModule({
      providers: [
        ErrorService
      ]
    }),
      errorService = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    const service: ErrorService = TestBed.inject(ErrorService);
    expect(service).toBeTruthy();
  });

  it('should handle the error', () => {
    const service: ErrorService = TestBed.inject(ErrorService);
    service.handleError('Test error');
    expect(service).toBeTruthy();
  });
});
