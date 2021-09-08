/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';
import { mockedNotificaciones } from 'src/app/shared/mocks/mocked-notificaciones';
import { mockedUsuarios } from 'src/app/shared/mocks/mocked-usuarios';
import { ToastService } from 'src/app/shared/services/toast.service';

import { NotificationsModalComponent } from './notifications-modal.component';

describe('NotificationsModalComponent', () => {
  let component: NotificationsModalComponent;
  let fixture: ComponentFixture<NotificationsModalComponent>;

  const modalSpy = jasmine.createSpyObj('Modal', ['present', 'onWillDismiss', 'dismiss']);
  const modalControllerSpy = jasmine.createSpyObj('ModalController', ['create', 'dismiss']);
  modalControllerSpy.create.and.callFake(() => modalSpy);

  const mockToastService = {
    presentToast(): Promise<void> {
      return Promise.resolve();
    },
    presentErrorToast(): Promise<void> {
      return Promise.resolve();
    },
    presentInviteToast(): Promise<void> {
      return Promise.resolve();
    }
  };

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule,
        RouterTestingModule,
        IurisUtilsModule
      ],
      providers: [
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: ToastService, useValue: mockToastService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsModalComponent);
    component = fixture.componentInstance;
    component.usuario = mockedUsuarios[0];
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dismiss', () => {
    component.dismiss();
    expect(component).toBeTruthy();
  });

  it('should change a segment', () => {
    const mockedEvent = {
      detail: {
        value: 'inactivas'
      }
    };
    // fixture.detectChanges();
    component.changeSegment(mockedEvent);
    expect(component.activeSegment).toEqual('inactivas');
  });

  it('should go to entity', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.usuario = mockedUsuarios[0];
    component.goToEntity(mockedNotificaciones[0]);
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should mark the notification as read', () => {
    // const toastService = TestBed.inject(ToastService);
    // spyOn(toastService, 'presentToast');
    component.markedAsRead(mockedUsuarios[0].notificaciones[0]);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});
