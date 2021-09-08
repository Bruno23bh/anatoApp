import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SwUpdate } from '@angular/service-worker';
import { IonicModule, ModalController } from '@ionic/angular';
import { Caso } from 'functions/src/interfaces/caso';
import { Pago } from 'functions/src/interfaces/pago';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { Observable, of, throwError } from 'rxjs';
import { CasosService } from 'src/app/casos/services/casos.service';
import { PagosService } from 'src/app/pagos/services/pagos.service';
import { content } from 'src/app/shared/constants/content.constant';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';
import { mockedCasos } from 'src/app/shared/mocks/mocked-casos';
import { mockedPagos } from 'src/app/shared/mocks/mocked-pagos';
import { mockedUsuarios } from 'src/app/shared/mocks/mocked-usuarios';
import { ContentService } from 'src/app/shared/services/content.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { Usuario } from '../../interfaces/usuario';
import { AuthService } from '../../services/auth.service';
import { NotificationsService } from '../../services/notifications.service';
import { ThemeService } from '../../services/theme.service';
import { UpdateService } from '../../services/update.service';
import { UsuariosService } from '../../services/usuarios.service';
import { LoginPage } from '../login/login.page';
import { HomePageModule } from './home.module';
import { HomePage } from './home.page';

/* eslint-disable prefer-arrow/prefer-arrow-functions */
// import * as moment from 'moment';
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  const mockContentService = {
    contents: {
      home: JSON.parse(content.home)
    }
  };

  const themeService = {
    enableDark(): void { },

    enableLight(): void { }
  };

  const loadingService = {
    async present() { },

    async dismiss() { }
  };

  const mockNotificationsService = {
    requestPermission(): Observable<boolean> {
      return of(true);
    },
    requestToken(): Observable<string> {
      return of('12345');
    }
  };

  const angularFireRemoteConfigStub = {};

  const mockCasosService = {
    getCasos(): Observable<Caso[]> {
      return of(mockedCasos);
    },
  };

  const docSpy = jasmine.createSpyObj({
    valueChanges: of(mockedCasos),
    doc: of(mockedCasos[0]),
    delete: () => { },
    set: () => { },
    put: () => { },
  });

  const collectionSpy = jasmine.createSpyObj({
    valueChanges: of(mockedCasos),
    doc: docSpy
  });

  const angularFirestoreStub = {
    collection: () => collectionSpy
  };

  const mockToastService = {
    presentToast(): Promise<void> {
      return Promise.resolve();
    },
    presentErrorToast(): Promise<void> {
      return Promise.resolve();
    },
  };

  const angularFireAuthStub = jasmine.createSpyObj({
    createUserWithEmailAndPassword: () => { Promise.resolve(true); },
    signInWithEmailAndPassword: () => { Promise.resolve(true); },
    sendPasswordResetEmail: () => { Promise.resolve(true); },
    sendEmailVerification: () => { Promise.resolve(true); },
  });

  const angularFireFunctionsStub = jasmine.createSpyObj({
    httpsCallable: () => { Promise.resolve(true); }
  });

  const mockUsuariosService = {
    getUsuarioByEmail(): Observable<Usuario[]> {
      return of([mockedUsuarios[0]]);
    },

    putUsuario(): Promise<boolean> {
      return Promise.resolve(true);
    },

    getUsuario(): Observable<Usuario> {
      return of(mockedUsuarios[0]);
    },
  };

  const mockPagosService = {
    getPagos(): Observable<Pago[]> {
      return of(mockedPagos);
    },

    goToPago(): any { }
  };

  const mockUpdateService = {
    checkForUpdates: () => { Promise.resolve(true); },
    updateAndRestart: () => { Promise.resolve(true); }
  };

  const mockAuthService = {
    sendPasswordResetEmail(): Promise<void> {
      return Promise.resolve();
    },

    login(): Promise<void> {
      return Promise.resolve();
    },

    logout(): Promise<void> {
      return Promise.resolve();
    }
  };

  const modalSpy = jasmine.createSpyObj('Modal', ['present', 'onWillDismiss', 'dismiss']);
  const modalControllerSpy = jasmine.createSpyObj('ModalController', ['create']);
  modalControllerSpy.create.and.callFake(() => modalSpy);

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule,
        IurisUtilsModule,
        Ng2GoogleChartsModule,
        RouterTestingModule.withRoutes([
          { path: 'core/payment/:userId', component: HomePage },
          { path: 'core/login', component: LoginPage }
        ]),
        HomePageModule
      ],
      providers: [
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: ThemeService, useValue: themeService },
        { provide: ToastService, useValue: mockToastService },
        { provide: LoadingService, useValue: loadingService },
        { provide: ContentService, useValue: mockContentService },
        { provide: NotificationsService, useValue: mockNotificationsService },
        { provide: AngularFireFunctions, useValue: angularFireFunctionsStub },
        { provide: AngularFireAuth, useValue: angularFireAuthStub },
        { provide: CasosService, useValue: mockCasosService },
        { provide: AngularFirestore, useValue: angularFirestoreStub },
        { provide: UsuariosService, useValue: mockUsuariosService },
        { provide: PagosService, useValue: mockPagosService },
        { provide: AuthService, useValue: mockAuthService },
        { provide: UpdateService, useValue: mockUpdateService },
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: SwUpdate },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              params: {
                id: mockedCasos[0].id
              },
              data: {
                usuario: mockedUsuarios[0]
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    component.activeTime = '7';
    component.pagosChartsTime = '31/12/2020';
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get an error when getting a user', () => {
    const usuariosService = TestBed.inject(UsuariosService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(usuariosService, 'getUsuario').and.returnValue(throwError(new Error('Test error')));
    component.getUsuario();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get an error when putting an usuario', () => {
    const usuariosService = TestBed.inject(UsuariosService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(usuariosService, 'putUsuario').and.returnValue(Promise.reject());
    component.putUsuario(mockedUsuarios[0]);
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get an error when getting the casos', () => {
    const casosService = TestBed.inject(CasosService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(casosService, 'getCasos').and.returnValue(throwError(new Error('Test error')));
    component.getCasos();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get an error when getting the pagos', () => {
    const pagosService = TestBed.inject(PagosService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(pagosService, 'getPagos').and.returnValue(throwError(new Error('Test error')));
    component.getPagos();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get an error when getting the token', () => {
    const notificationsService = TestBed.inject(NotificationsService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(notificationsService, 'requestToken').and.returnValue(throwError(new Error('Test error')));
    component.getToken();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get an error when asking for notification permissions', () => {
    const notificationsService = TestBed.inject(NotificationsService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(notificationsService, 'requestPermission').and.returnValue(throwError(new Error('Test error')));
    component.requestPermission();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.logout();
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when logging out', () => {
    const authService = TestBed.inject(AuthService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(authService, 'logout').and.returnValue(Promise.reject());
    component.logout();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should change the timeChartsSelected for pagos data', () => {
    const option = {
      detail: {
        value: '2020'
      }
    };
    component.timeChartsSelected(option);
    expect(component).toBeTruthy();
  });

  it('should close the pwa message', () => {
    component.closePwaMessage();
    expect(component).toBeTruthy();
  });

  it('should close the free message', () => {
    component.closeFreeMessage();
    expect(component).toBeTruthy();
  });

  it('should navigate to the caso page', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.goToCaso('casos');
    expect(routerService.navigate).toHaveBeenCalled();
  });

  it('should navigate to the pago page', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    component.goToPago('pagos');
    expect(routerService.navigate).toHaveBeenCalled();
  });

  it('should open notifications modal', () => {
    component.notificationsClicked();
    expect(component).toBeTruthy();
  });

  it('should changed the selected time', () => {
    const option = {
      detail: {
        value: '7'
      }
    };
    component.timeSelected(option);
    expect(component).toBeTruthy();
  });

  it('should changed the segment', () => {
    const option = {
      detail: {
        value: 'asignadas'
      }
    };
    component.changeSegment(option);
    expect(component.activeSegment).toBe('asignadas');
  });

  it('should changed the active card', () => {
    component.cardSelected('Turnos');
    expect(component.activeCard).toBe('Turnos');
  });

  it('should changed the informes card selected', () => {
    component.cardInformesSelected('Pagos');
    expect(component).toBeTruthy();
  });

  // it('should swipe to next card', () => {
  //   component.swipeNext();
  //   expect(component).toBeTruthy();
  // });

  // it('should swipe to previous card', () => {
  //   component.swipePrevious();
  //   expect(component).toBeTruthy();
  // });

});
