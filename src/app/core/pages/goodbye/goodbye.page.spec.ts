import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { content } from 'src/app/shared/constants/content.constant';
import { ContentService } from 'src/app/shared/services/content.service';

import { LoginPage } from '../login/login.page';
import { GoodbyePageModule } from './goodbye.module';
import { GoodbyePage } from './goodbye.page';

const angularFireAuthStub = jasmine.createSpyObj({
  createUserWithEmailAndPassword: () => { Promise.resolve(true); },
  signInWithEmailAndPassword: () => { Promise.resolve(true); },
  sendPasswordResetEmail: () => { Promise.resolve(true); },
  sendEmailVerification: () => { Promise.resolve(true); },
  signOut: () => { Promise.resolve(true); },
});

const angularFireFunctionsStub = jasmine.createSpyObj({
  httpsCallable: () => { Promise.resolve(true); }
});

const angularFireRemoteConfigStub = {};

const mockContentService = {
  contents: {
    goodbye: JSON.parse(content.goodbye),
  }
};

describe('GoodbyePage', () => {
  let component: GoodbyePage;
  let fixture: ComponentFixture<GoodbyePage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: AngularFireFunctions, useValue: angularFireFunctionsStub },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: ContentService, useValue: mockContentService }
      ],
      imports: [
        IonicModule,
        CommonModule,
        GoodbyePageModule,
        RouterTestingModule.withRoutes([
          { path: 'core/login', component: LoginPage }
        ])]
    }).compileComponents();

    fixture = TestBed.createComponent(GoodbyePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
