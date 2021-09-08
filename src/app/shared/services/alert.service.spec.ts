import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let alertService: AlertService;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    TestBed.configureTestingModule({
      providers: [
        AlertService
      ]
    }),
      alertService = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    const service: AlertService = TestBed.inject(AlertService);
    expect(service).toBeTruthy();
  });

  it('should show showYesNoAlert', () => {
    const service: AlertService = TestBed.inject(AlertService);
    const values = {
      header: 'Test',
      message: 'Test'
    };
    service.showYesNoAlert(values);
    expect(service).toBeTruthy();
  });

  it('should show showForgotChangePasswordlAlert', () => {
    const service: AlertService = TestBed.inject(AlertService);
    const values = {
      header: 'Test',
      subHeader: 'Test'
    };
    service.showForgotChangePasswordlAlert(values);
    expect(service).toBeTruthy();
  });

  it('should show showUserRegistrationAlert', () => {
    const service: AlertService = TestBed.inject(AlertService);
    const values = {
      header: 'Test',
      subHeader: 'Test'
    };
    service.showUserRegistrationAlert(values, 'Test', 'Test', 'Test', 'Test', 'Test');
    expect(service).toBeTruthy();
  });

  it('should show showChangeUserPermitAlert', () => {
    const service: AlertService = TestBed.inject(AlertService);
    const values = {
      header: 'Test',
      subHeader: 'Test'
    };
    service.showChangeUserPermitAlert(values, false, false, 'Test', 'Test', 'Test', 'Test');
    expect(service).toBeTruthy();
  });

  // it('should show showNoNetworkAlert', () => {
  //   const service: AlertService = TestBed.inject(AlertService);
  //   service.showNoNetworkAlert();
  //   expect(service).toBeTruthy();
  // });

  it('should show addLinkResourceAlert', () => {
    const service: AlertService = TestBed.inject(AlertService);
    const values = {
      header: 'Test',
      subHeader: 'Test'
    };
    service.addLinkResourceAlert(values, 'Test', 'Test', 'Test', 'Test');
    expect(service).toBeTruthy();
  });

  it('should show editResourceNameAlert', () => {
    const service: AlertService = TestBed.inject(AlertService);
    const values = {
      header: 'Test',
      subHeader: 'Test'
    };
    service.editResourceNameAlert(values, 'Test', 'Test', 'Test');
    expect(service).toBeTruthy();
  });

  it('should show addAbonoAlert', () => {
    const service: AlertService = TestBed.inject(AlertService);
    const values = {
      header: 'Test',
      subHeader: 'Test'
    };
    service.addAbonoAlert(values, 'Test', 'Test', 'Test', 'Test');
    expect(service).toBeTruthy();
  });

});
