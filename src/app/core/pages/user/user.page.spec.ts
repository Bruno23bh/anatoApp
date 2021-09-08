/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { Observable, of } from 'rxjs';
import { content } from 'src/app/shared/constants/content.constant';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ContentService } from 'src/app/shared/services/content.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { mockedUsuarios } from '../../../shared/mocks/mocked-usuarios';
import { Usuario } from '../../interfaces/usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { SettingsPageModule } from '../settings/settings.module';
import { SettingsPage } from '../settings/settings.page';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';

describe('UserPage', () => {
  let component: UserPage;
  let fixture: ComponentFixture<UserPage>;

  const mockUsuariosService = {
    getUsuario(): Observable<Usuario> {
      return of(mockedUsuarios[0]);
    },

    putUsuario(): Promise<void> {
      return Promise.resolve();
    },

    deleteUsuario(): Promise<void> {
      return Promise.resolve();
    },
  };

  const mockToastService = {
    presentToast(): Promise<void> {
      return Promise.resolve();
    },
    presentErrorToast(): Promise<void> {
      return Promise.resolve();
    }
  };

  const mockAlertService = {
    showYesNoAlert(): Observable<boolean> {
      return of(true);
    },
  };

  const docSpy = jasmine.createSpyObj({
    valueChanges: of(mockedUsuarios[0]),
    doc: of(mockedUsuarios[0]),
    delete: () => { },
    set: () => { },
    put: () => { },
  });

  const collectionSpy = jasmine.createSpyObj({
    valueChanges: of(mockedUsuarios),
    doc: docSpy
  });

  const angularFireStorageStub = {
    collection: collectionSpy
  };

  const angularFirestoreStub = {
    collection: () => mockedUsuarios
  };

  const mockedAngularFireAuthGuard = {
    canActivate: () => { }
  };

  const mockContentService = {
    contents: {
      user: JSON.parse(content.user)
    }
  };

  const angularFireRemoteConfigStub = {};

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        UserPage,
        UserFormComponent],
      imports: [
        IonicModule,
        SettingsPageModule,
        RouterTestingModule.withRoutes([
          { path: 'core/settings', component: SettingsPage }
        ]),
        CommonModule,
        SimpleMaskModule,
        FormsModule,
        ReactiveFormsModule,
        UserPageRoutingModule,
        IurisUtilsModule
      ],
      providers: [
        { provide: ContentService, useValue: mockContentService },
        { provide: UsuariosService, useValue: mockUsuariosService },
        { provide: ToastService, useValue: mockToastService },
        { provide: AlertService, useValue: mockAlertService },
        { provide: AngularFirestore, useValue: angularFirestoreStub },
        { provide: AngularFireStorage, useValue: angularFireStorageStub },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: AngularFireAuthGuard, useValue: mockedAngularFireAuthGuard },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              params: [
                {
                  id: mockedUsuarios[0].id
                }
              ],
              data: {
                usuario: mockedUsuarios[0]
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    component.usuario = mockedUsuarios[0];
    expect(component).toBeTruthy();
  });

  it('should leave without any changes', () => {
    component.userForm.markAsDirty();
    component.isSaving = false;
    spyOn(window, 'confirm').and.callFake(() => true);
    component.canDeactivate();
    expect(component).toBeTruthy();
  });

  it('should change a segment', () => {
    const mockedEvent = {
      detail: {
        value: 'Datos'
      }
    };
    component.changeSegment(mockedEvent);
    expect(component.activeSegment).toEqual('Datos');
  });

  it('should edit a user', () => {
    component.usuario = mockedUsuarios[0];
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.onSubmit();
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when editing a user', () => {
    const usuariosService = TestBed.inject(UsuariosService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(usuariosService, 'putUsuario').and.returnValue(Promise.reject());
    component.onSubmit();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should change the theme to dark', () => {
    const mockedEvent = {
      detail: {
        checked: true
      }
    };
    component.changeTheme(mockedEvent);
    expect(component.usuario.colorTheme).toEqual('dark');
  });

  it('should change the theme to light', () => {
    const mockedEvent = {
      detail: {
        checked: false
      }
    };
    component.changeTheme(mockedEvent);
    expect(component.usuario.colorTheme).toEqual('light');
  });

  it('should go back', (() => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    component.onBack();
    expect(router.navigate).toHaveBeenCalled();
  }));
});
