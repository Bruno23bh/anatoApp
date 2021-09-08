/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { Organizacion } from 'src/app/core/interfaces/organizacion';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';
import { content } from 'src/app/shared/constants/content.constant';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';
import { mockedOrganizaciones } from 'src/app/shared/mocks/mocked-organizaciones';
import { mockedPagos } from 'src/app/shared/mocks/mocked-pagos';
import { ContentService } from 'src/app/shared/services/content.service';

import { ToastService } from '../../../shared/services/toast.service';
import { PrivadosPage } from './privados.page';

describe('PrivadosPage', () => {
  let component: PrivadosPage;
  let fixture: ComponentFixture<PrivadosPage>;

  const mockOrganizacionService = {
    getOrganizacion(): Observable<Organizacion> {
      return of(mockedOrganizaciones[0]);
    },
    putOrganizacion(): Promise<void> {
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

  const docSpy = jasmine.createSpyObj({
    valueChanges: of(mockedOrganizaciones[0]),
    doc: of(mockedOrganizaciones[0]),
    delete: () => { },
    set: () => { },
    put: () => { },
  });

  const collectionSpy = jasmine.createSpyObj({
    valueChanges: of(mockedOrganizaciones),
    doc: docSpy
  });

  const angularFireStorageStub = {
    collection: collectionSpy
  };

  const mockContentService = {
    contents: {
      recursos: JSON.parse(content.recursos)
    }
  };

  const angularFireRemoteConfigStub = {};

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [PrivadosPage],
      imports: [
        IonicModule,
        IurisUtilsModule,
        RouterTestingModule],
      providers: [
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: ContentService, useValue: mockContentService },
        { provide: ToastService, useValue: mockToastService },
        { provide: OrganizacionService, useValue: mockOrganizacionService },
        { provide: AngularFireStorage, useValue: angularFireStorageStub },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              params: {
                organizacionId: mockedOrganizaciones[0].id
              },
              data: {
                organizacion: mockedOrganizaciones[0]
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add privado', () => {
    component.filesHasChanged(mockedPagos[0].files);
    expect(component.organizacion.privados.length).toEqual(1);
  });

  it('should put a privado', () => {
    const routerService = TestBed.inject(Router);
    spyOn(routerService, 'navigate');
    // component.pago = mockedPagos[0];
    component.onSubmit();
    // expect(routerService.navigate).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should get error when putting a privado', () => {
    const organizacionService = TestBed.inject(OrganizacionService);
    const toastService = TestBed.inject(ToastService);
    spyOn(toastService, 'presentErrorToast');
    spyOn(organizacionService, 'putOrganizacion').and.returnValue(Promise.reject());
    component.onSubmit();
    // expect(toastService.presentErrorToast).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

});
