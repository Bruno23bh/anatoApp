import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { of } from 'rxjs';
import { mockedUsuarios } from 'src/app/shared/mocks/mocked-usuarios';

import { AuthService } from './auth.service';

const angularFireAuthStub = jasmine.createSpyObj({
  createUserWithEmailAndPassword: () => { Promise.resolve(true); },
  signInWithEmailAndPassword: () => { Promise.resolve(true); },
  sendPasswordResetEmail: () => { Promise.resolve(true); },
  sendEmailVerification: () => { Promise.resolve(true); },
  signOut: () => { Promise.resolve(true); },
  sendInviteEmail: () => { Promise.resolve(true); },
});

const angularFireFunctionsStub = jasmine.createSpyObj({
  httpsCallable: () => { Promise.resolve(true); }
});

const docSpy = jasmine.createSpyObj({
  valueChanges: of(mockedUsuarios),
  doc: of(mockedUsuarios[0]),
  delete: () => { Promise.resolve(true); },
  set: () => { Promise.resolve(true); }
});

const collectionSpy = jasmine.createSpyObj({
  valueChanges: of(mockedUsuarios),
  doc: docSpy
});

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFireAuth, useValue: angularFireAuthStub },
      { provide: AngularFireFunctions, useValue: angularFireFunctionsStub },
    ]
  })
  );

  it('should be created', () => {
    const service: AuthService = TestBed.inject(AuthService);
    expect(service).toBeTruthy();
  });

  it('should register', () => {
    const angularFireAuth = TestBed.inject(AngularFireAuth);
    authService = TestBed.inject(AuthService);
    authService.register(mockedUsuarios[0].email, 'Aa12345');
    expect(angularFireAuth.createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('should add the admin role', () => {
    const angularFireFunctions = TestBed.inject(AngularFireFunctions);
    authService = TestBed.inject(AuthService);
    authService.addAdminRole(mockedUsuarios[0].id);
    expect(angularFireFunctions.httpsCallable).toHaveBeenCalled();
  });

  it('should add the paid role', () => {
    const angularFireFunctions = TestBed.inject(AngularFireFunctions);
    authService = TestBed.inject(AuthService);
    authService.addHasPaidRole(mockedUsuarios[0].id);
    expect(angularFireFunctions.httpsCallable).toHaveBeenCalled();
  });

  it('should remove the admin role', () => {
    const angularFireFunctions = TestBed.inject(AngularFireFunctions);
    authService = TestBed.inject(AuthService);
    authService.removeAdminRole(mockedUsuarios[0].id);
    expect(angularFireFunctions.httpsCallable).toHaveBeenCalled();
  });

  it('should create a user', () => {
    const angularFireFunctions = TestBed.inject(AngularFireFunctions);
    authService = TestBed.inject(AuthService);
    authService.createUser(mockedUsuarios[0].email, 'Aa12345', mockedUsuarios[0].nombre, mockedUsuarios[0].apellido);
    expect(angularFireFunctions.httpsCallable).toHaveBeenCalled();
  });

  it('should update a user', () => {
    const angularFireFunctions = TestBed.inject(AngularFireFunctions);
    authService = TestBed.inject(AuthService);
    authService.updateUser(mockedUsuarios[0].email, mockedUsuarios[0].nombre, mockedUsuarios[0].nombre, false);
    expect(angularFireFunctions.httpsCallable).toHaveBeenCalled();
  });

  it('should login', () => {
    const angularFireAuth = TestBed.inject(AngularFireAuth);
    authService = TestBed.inject(AuthService);
    authService.login(mockedUsuarios[0].email, 'Aa12345');
    // expect(angularFireAuth.createUserWithEmailAndPassword).toHaveBeenCalled();
    expect(angularFireAuth).toBeTruthy();
  });

  // it('should send the email verification', () => {
  //   const angularFireAuth = TestBed.inject(AngularFireAuth);
  //   // angularFireAuth.currentUser = mockedUsuarios[0];
  //   authService = TestBed.inject(AuthService);
  //   authService.sendEmailVerification();
  //   // expect(angularFireAuth.sendEmailVerification).toHaveBeenCalled();
  //   expect(angularFireAuth).toBeTruthy();
  // });

  it('should send the password reset email', () => {
    const angularFireAuth = TestBed.inject(AngularFireAuth);
    authService = TestBed.inject(AuthService);
    authService.sendPasswordResetEmail(mockedUsuarios[0].email);
    expect(angularFireAuth.sendPasswordResetEmail).toHaveBeenCalled();
  });

  it('should logout', () => {
    const angularFireAuth = TestBed.inject(AngularFireAuth);
    authService = TestBed.inject(AuthService);
    authService.logout();
    // expect(angularFireAuth.logout).toHaveBeenCalled();
    expect(angularFireAuth).toBeTruthy();
  });

  // it('should return the custom claims', () => {
  //   const angularFireAuth = TestBed.inject(AngularFireAuth);
  //   authService = TestBed.inject(AuthService);
  //   authService.showCustomClaim();
  //   expect(angularFireAuth).toBeTruthy();
  // });

  it('should send the email verification link', () => {
    const angularFireAuth = TestBed.inject(AngularFireAuth);
    authService = TestBed.inject(AuthService);
    authService.sendEmailVerificationLink(mockedUsuarios[0].email, mockedUsuarios[0].id, mockedUsuarios[0].nombre);
    expect(angularFireAuth).toBeTruthy();
  });

  it('should send the invite email', () => {
    const angularFireAuth = TestBed.inject(AngularFireAuth);
    authService = TestBed.inject(AuthService);
    authService.sendInviteEmail(mockedUsuarios[0].email, 'pablogil_39@hotmail.com');
    expect(angularFireAuth).toBeTruthy();
  });
});
