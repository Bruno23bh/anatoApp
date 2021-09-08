import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { AngularFireStorage } from '@angular/fire/storage';
import { IonicModule } from '@ionic/angular';
import { Organizacion } from 'functions/src/interfaces/organizacion';
import { Observable, of } from 'rxjs';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';
import { content } from 'src/app/shared/constants/content.constant';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';
import { mockedOrganizaciones } from 'src/app/shared/mocks/mocked-organizaciones';
import { mockedPagos } from 'src/app/shared/mocks/mocked-pagos';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ContentService } from 'src/app/shared/services/content.service';
import { ToastService } from 'src/app/shared/services/toast.service';

import { UploadFilesComponent } from './upload-files.component';

// FIXME: Fix commented tests
describe('UploadFilesComponent', () => {
  let component: UploadFilesComponent;
  let fixture: ComponentFixture<UploadFilesComponent>;

  const mockToastService = {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    presentToast(): Promise<void> {
      return Promise.resolve();
    },
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    presentErrorToast(): Promise<void> {
      return Promise.resolve();
    }
  };

  const mockAlertService = {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    showYesNoAlert(): Observable<boolean> {
      return of(true);
    },
  };

  const docSpy = jasmine.createSpyObj({
    valueChanges: of(mockedPagos[0]),
    doc: of(mockedPagos[0]),
    delete: () => { },
    set: () => { },
    put: () => { },
  });

  const collectionSpy = jasmine.createSpyObj({
    valueChanges: of(mockedPagos),
    doc: docSpy
  });

  const angularFirestoreStub = {
    collection: () => mockedPagos
  };

  const mockedAngularFireAuthGuard = {
    canActivate: () => { }
  };

  const refSpy = jasmine.createSpyObj({
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    getDownloadURL(): Observable<boolean> {
      return of(true);
    },
  });

  const angularFireStorageStub = {
    collection: collectionSpy,
    ref: refSpy,
    upload: () => { },
    delete: () => { }
  };

  const mockContentService = {
    contents: {
      uploadFiles: JSON.parse(content.uploadFiles)
    }
  };

  const angularFireRemoteConfigStub = {};

  const mockOrganizacionService = {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    getOrganizacion(): Observable<Organizacion> {
      return of(mockedOrganizaciones[0]);
    },

    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    putOrganizacion(): Promise<void> {
      return Promise.resolve();
    },

    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    deleteOrganizacion(): Promise<void> {
      return Promise.resolve();
    }
  };

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule,
        CommonModule,
        IurisUtilsModule],
      providers: [
        { provide: ContentService, useValue: mockContentService },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: AngularFireStorage, useValue: angularFireStorageStub },
        { provide: ToastService, useValue: mockToastService },
        { provide: AlertService, useValue: mockAlertService },
        { provide: OrganizacionService, useValue: mockOrganizacionService },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    component.entity = mockedPagos[1];
    component.path = 'pagos';
    expect(component).toBeTruthy();
  });

  // it('should upload an entity', () => {
  //   const files: any[] = [];
  //   files.push({ size: 134217728 });
  //   const mockedEvent = {
  //     target: {
  //       files
  //     }
  //   };
  //   // component.entity = mockedPagos[1];
  //   // component.path = 'casos';
  //   const angularFireStorage = TestBed.inject(AngularFireStorage);
  //   spyOn(angularFireStorage, 'upload').and.returnValue(of('www.test.com') as any);
  //   component.uploadEntity(mockedEvent, 'Test');
  //   expect(component).toBeTruthy();
  // });

  // it('should not upload a file because of the size ', () => {
  //   const files: any[] = [];
  //   files.push({ size: 134217729 });
  //   const mockedEvent = {
  //     target: {
  //       files
  //     }
  //   };
  //   const toastService = TestBed.inject(ToastService);
  //   spyOn(toastService, 'presentErrorToast');
  //   component.uploadEntity(mockedEvent, 'Test');
  //   expect(toastService.presentErrorToast).toHaveBeenCalled();
  // });

  // it('should build the file path with a card', () => {
  //   component.entity = mockedCasos[0];
  //   component.type = 'card';
  //   component.buildPath('Test');
  //   expect(component).toBeTruthy();
  // });

  // it('should build the file path with a page', () => {
  //   component.type = 'page';
  //   component.buildPath('Test');
  //   expect(component).toBeTruthy();
  // });

  // it('should push the files path with a page with no files', () => {
  //   component.entity = [];
  //   component.type = 'page';
  //   component.pushFiles(mockedCasos[0].files[0].fileUrl, mockedCasos[0].files[0].name, mockedCasos[0].files[0].type, mockedCasos[0].files[0].filePath);
  //   expect(component).toBeTruthy();
  // });

  // it('should push the files path with a page', () => {
  //   component.entity = [{
  //     filePath: 'casos/oeRv9R16HfIDLELjZLl9/Foto-2020-06-03T22:19:22.320Z',
  //
  //     fileUrl: 'https://firebasestorage.googleapis.com/v0/b/dev-iuris.appspot.com/o/casos%2FoeRv9R16HfIDLELjZLl9%2FFoto-2020-06-03T22%3A19%3A22.320Z?alt=media&token=93488b54-af0e-43f4-8755-806ba7c61c05',
  //     name: 'Foto-2020-06-03T22:19:22.320Z',
  //     type: 'image/jpeg'
  //   }];
  //   component.type = 'page';
  //   component.pushFiles(mockedCasos[0].files[0].fileUrl, mockedCasos[0].files[0].name, mockedCasos[0].files[0].type, mockedCasos[0].files[0].filePath);
  //   expect(component).toBeTruthy();
  // });

  // it('should push the files path with a card', () => {
  //   component.entity = mockedCasos[0];
  //   component.type = 'card';
  //   component.pushFiles(mockedCasos[0].files[0].fileUrl, mockedCasos[0].files[0].name, mockedCasos[0].files[0].type, mockedCasos[0].files[0].filePath);
  //   expect(component).toBeTruthy();
  // });

  // it('should push the files path with a card with no files', () => {
  //   component.entity = mockedPagos[2];
  //   component.type = 'card';
  //   component.pushFiles(mockedCasos[0].files[0].fileUrl, mockedCasos[0].files[0].name, mockedCasos[0].files[0].type, mockedCasos[0].files[0].filePath);
  //   expect(component).toBeTruthy();
  // });

  // it('should download a file', () => {
  //   const angularFireStorage = TestBed.inject(AngularFireStorage);
  //   spyOn(angularFireStorage, 'ref').and.returnValue(refSpy as any);
  //   const entityFile = {
  //     filePath: 'casos/oeRv9R16HfIDLELjZLl9/Foto-2020-06-03T22:19:22.320Z',
  //
  //     fileUrl: 'https://firebasestorage.googleapis.com/v0/b/dev-iuris.appspot.com/o/casos%2FoeRv9R16HfIDLELjZLl9%2FFoto-2020-06-03T22%3A19%3A22.320Z?alt=media&token=93488b54-af0e-43f4-8755-806ba7c61c05',
  //     name: 'Foto-2020-06-03T22:19:22.320Z',
  //     type: 'image/jpeg'
  //   }
  //   component.downloadEntity(entityFile);
  //   expect(component).toBeTruthy();
  // });

  // it('should call delete file alert', async () => {
  //   const alertService = TestBed.inject(AlertService);
  //   spyOn(alertService, 'showYesNoAlert').and.returnValue(of(true));
  //   component.confirmEntityFile(mockedCasos[0].files[0]);
  //   expect(alertService.showYesNoAlert).toHaveBeenCalled();
  // });

  // it('should get error when opening delete file alert', () => {
  //   const alertService = TestBed.inject(AlertService);
  //   spyOn(alertService, 'showYesNoAlert').and.returnValue(throwError(new Error('Test error')));
  //   component.confirmEntityFile(mockedCasos[0].files[0]);
  //   expect(alertService.showYesNoAlert).toHaveBeenCalled();
  // });

  // it('should get error when deleting a file', () => {
  //   const angularFireStorage = TestBed.inject(AngularFireStorage);
  //   const toastService = TestBed.inject(ToastService);
  //   spyOn(angularFireStorage, 'ref').and.returnValue(throwError(new Error('Test error')) as any);
  //   spyOn(toastService, 'presentErrorToast');
  //   component.deleteEntityFile(mockedCasos[0].files[0]);
  //   expect(toastService.presentErrorToast).toHaveBeenCalled();
  // });

  // it('should filter entities', (() => {
  //   component.loadedFiles = mockedCasos[0].files;
  //   const mockedEvent = {
  //     target: {
  //       value: 'Dant'
  //     }
  //   };
  //   component.filterFiles(mockedEvent);
  //   expect(component.entity.length).toEqual(0);
  // }));

  // it('should not filtered entities because of lack of characters', (() => {
  //   component.loadedFiles = mockedCasos[0].files;
  //   const mockedEvent = {
  //     target: {
  //       value: 'Da'
  //     }
  //   };
  //   component.filterFiles(mockedEvent);
  //   expect(component.entity.length).toEqual(component.entity.length);
  // }));
});
