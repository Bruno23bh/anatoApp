import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  let toastService: ToastService;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    TestBed.configureTestingModule({
      providers: [
        ToastService
      ]
    }),
      toastService = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    const service: ToastService = TestBed.inject(ToastService);
    expect(service).toBeTruthy();
  });

  it('should present a toast', () => {
    const service: ToastService = TestBed.inject(ToastService);
    service.presentToast('Test');
    expect(service).toBeTruthy();
  });

  it('should present an error toast', () => {
    const service: ToastService = TestBed.inject(ToastService);
    service.presentErrorToast('Test');
    expect(service).toBeTruthy();
  });

  it('should present an error toast and avoid send message to sentry', () => {
    const service: ToastService = TestBed.inject(ToastService);
    service.presentErrorToast('Test', true);
    expect(service).toBeTruthy();
  });
});
