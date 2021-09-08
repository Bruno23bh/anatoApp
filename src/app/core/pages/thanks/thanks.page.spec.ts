/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { content } from 'src/app/shared/constants/content.constant';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';
import { ContentService } from 'src/app/shared/services/content.service';

import { AuthService } from '../../services/auth.service';
import { LoginPage } from '../login/login.page';
import { ThanksPageModule } from './thanks.module';
import { ThanksPage } from './thanks.page';

describe('ThanksPage', () => {
  let component: ThanksPage;
  let fixture: ComponentFixture<ThanksPage>;

  const angularFireAuthStub = jasmine.createSpyObj({
    createUserWithEmailAndPassword: () => { Promise.resolve(true); },
    signInWithEmailAndPassword: () => { Promise.resolve(true); },
    sendPasswordResetEmail: () => { Promise.resolve(true); },
    sendEmailVerification: () => { Promise.resolve(true); },
  });

  const angularFireFunctionsStub = jasmine.createSpyObj({
    httpsCallable: () => { Promise.resolve(true); }
  });

  const mockAuthService = {
    logout(): Promise<void> {
      return Promise.resolve();
    }
  };

  const mockContentService = {
    contents: {
      thanks: JSON.parse(content.thanks)
    }
  };

  const angularFireRemoteConfigStub = {};

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule,
        ThanksPageModule,
        RouterTestingModule.withRoutes([
          { path: 'core/login', component: LoginPage }
        ]),
        IurisUtilsModule
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: ContentService, useValue: mockContentService },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: AngularFireFunctions, useValue: angularFireFunctionsStub },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ThanksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    const routerService = TestBed.inject(Router);
    const authService = TestBed.inject(AuthService);
    spyOn(routerService, 'navigate');
    spyOn(authService, 'logout').and.returnValue(null);
    component.logout();
    expect(routerService.navigate).toHaveBeenCalled();
  });
});
