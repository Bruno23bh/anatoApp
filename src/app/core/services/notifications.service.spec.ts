import { TestBed } from '@angular/core/testing';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mockedUsuarios } from 'src/app/shared/mocks/mocked-usuarios';

import { NotificationsService } from './notifications.service';

const angularFireMessagingStub = jasmine.createSpyObj({
  requestPermission: () => { Promise.resolve(true); },
  requestToken: () => { Promise.resolve(true); },
  deleteToken: () => { Promise.resolve(true); }
});

const angularFireFunctionsStub = jasmine.createSpyObj({
  httpsCallable: () => { Promise.resolve(true); }
});

describe('NotificationsService', () => {
  let notificationsService: NotificationsService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFireMessaging, useValue: angularFireMessagingStub },
      { provide: AngularFireFunctions, useValue: angularFireFunctionsStub },
    ]
  })
  );

  it('should be created', () => {
    const service: NotificationsService = TestBed.inject(NotificationsService);
    expect(service).toBeTruthy();
  });

  it('should request the permissions', () => {
    notificationsService = TestBed.inject(NotificationsService);
    notificationsService.requestPermission();
    expect(notificationsService).toBeTruthy();
  });

  it('should request the token', () => {
    notificationsService = TestBed.inject(NotificationsService);
    notificationsService.requestToken();
    expect(notificationsService).toBeTruthy();
  });

  it('should delete the token', () => {
    notificationsService = TestBed.inject(NotificationsService);
    notificationsService.deleteToken(mockedUsuarios[0].tokens[0]);
    expect(notificationsService).toBeTruthy();
  });

  it('should send a notification', () => {
    notificationsService = TestBed.inject(NotificationsService);
    notificationsService.sendNotification(mockedUsuarios[0], 'Test');
    expect(notificationsService).toBeTruthy();
  });
});
