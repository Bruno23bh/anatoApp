import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { IonicModule, ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { content } from 'src/app/shared/constants/content.constant';
import { mockedDependencias } from 'src/app/shared/mocks/mocked-dependencias';
import { ContentService } from 'src/app/shared/services/content.service';

import { SelectDependenciaComponent } from './select-dependencia.component';

describe('SelectDependenciaComponent', () => {
  let component: SelectDependenciaComponent;
  let fixture: ComponentFixture<SelectDependenciaComponent>;

  const mockContentService = {
    contents: {
      selectClienteComponent: JSON.parse(content.selectClienteComponent)
    }
  };

  const angularFireRemoteConfigStub = {};

  const docSpyStore = jasmine.createSpyObj({
    valueChanges: of(mockedDependencias),
    doc: of(mockedDependencias[0]),
    delete: () => { },
    set: () => { },
    put: () => { },
  });

  const collectionSpyStore = jasmine.createSpyObj({
    valueChanges: of(mockedDependencias),
    doc: docSpyStore
  });

  const angularFirestoreStub = {
    collection: () => collectionSpyStore,
    createId: () => mockedDependencias[0].id
  };

  const modalSpy = jasmine.createSpyObj('Modal', ['present', 'onWillDismiss', 'dismiss']);
  const modalControllerSpy = jasmine.createSpyObj('ModalController', ['create']);
  modalControllerSpy.create.and.callFake(() => modalSpy);

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [SelectDependenciaComponent],
      imports: [
        IonicModule,
        CommonModule],
      providers: [
        { provide: ContentService, useValue: mockContentService },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: AngularFirestore, useValue: angularFirestoreStub },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should emit a dependencia', () => {
  //   // component.dependencia = mockedCasos[0].turnos[0].dependencia;
  //   component.emitDependencia(mockedCasos[0].turnos[0].dependencia);
  //   expect(component).toBeTruthy();
  // });

  it('should search a depdendencia', () => {
    component.searchDependencias();
    expect(component).toBeTruthy();
  });
});
