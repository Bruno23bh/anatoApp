import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let loadingService: LoadingService;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    TestBed.configureTestingModule({
      providers: [
        LoadingService
      ]
    }),
      loadingService = TestBed.inject(LoadingService);
  });

  // it('should be created', () => {
  //   const service: LoadingService = TestBed.inject(LoadingService);
  //   expect(service).toBeTruthy();
  // });

  // it('should present the current loading', () => {
  //   const service: LoadingService = TestBed.inject(LoadingService);
  //   service.currentLoading = 'Test';
  //   service.present('Tests message');
  //   expect(service).toBeTruthy();
  // });

  // it('should present the loading', () => {
  //   const service: LoadingService = TestBed.inject(LoadingService);
  //   service.present('Tests message');
  //   expect(service).toBeTruthy();
  // });

  // it('should dismiss the loading', () => {
  //   const service: LoadingService = TestBed.inject(LoadingService);
  //   service.currentLoading = 'Test';
  //   service.dismiss();
  //   expect(service).toBeTruthy();
  // });

});
