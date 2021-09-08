/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireRemoteConfig } from '@angular/fire/remote-config';
import { IonicModule, ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { Cliente } from 'src/app/clientes/interfaces/cliente';
import { ClientesService } from 'src/app/clientes/services/clientes.service';
import { content } from 'src/app/shared/constants/content.constant';
import { IurisUtilsModule } from 'src/app/shared/iuris-utils.module';
import { mockedClientes } from 'src/app/shared/mocks/mocked-clientes';
import { ContentService } from 'src/app/shared/services/content.service';

import { EntitiesModalComponent } from './entities-modal.component';

const modalSpy = jasmine.createSpyObj('Modal', ['present', 'onWillDismiss']);
const modalControllerSpy = jasmine.createSpyObj('ModalController', ['create', 'dismiss']);
modalControllerSpy.create.and.callFake(() => modalSpy);

const docSpy = jasmine.createSpyObj({
  valueChanges: of(mockedClientes[0]),
  doc: of(mockedClientes[0]),
  delete: () => { },
  set: () => { },
  put: () => { },
});

const collectionSpy = jasmine.createSpyObj({
  valueChanges: of(mockedClientes),
  doc: docSpy
});

const angularFirestoreStub = {
  collection: () => mockedClientes
};

const mockClientesService = {
  getClientes(): Observable<Cliente> {
    return of(mockedClientes[0]);
  }
};

const mockContentService = {
  contents: {
    selectEntitiesModal: JSON.parse(content.selectEntitiesModal)
  }
};

const angularFireRemoteConfigStub = {};

describe('EntitiesModalComponent', () => {
  let component: EntitiesModalComponent;
  let fixture: ComponentFixture<EntitiesModalComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicModule,
        IurisUtilsModule
      ],
      providers: [
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: AngularFireRemoteConfig, useValue: angularFireRemoteConfigStub },
        { provide: ContentService, useValue: mockContentService },
        { provide: ClientesService, useValue: mockClientesService },
        { provide: AngularFirestore, useValue: angularFirestoreStub },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EntitiesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    component.searchValue = '';
    expect(component).toBeTruthy();
  });

  it('left the page', (() => {
    component.ionViewDidLeave();
    expect(component.searchValue).toEqual('');
  }));

  it('should dismiss with an entity', () => {
    // const modalController = TestBed.inject(ModalController);
    // const toastSpy = spyOn(modalController, 'dismiss');
    component.dismiss();
    // expect(toastSpy).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });

  it('should filter an entity', () => {
    component.loadedEntities = mockedClientes;
    component.searchFirstParameter = 'nombre';
    component.searchSecondParameter = 'apellido';
    const mockedEvent = {
      target: {
        value: 'Pabl'
      }
    };
    component.filterEntities(mockedEvent);
    expect(component.entities.length).toEqual(component.entities.length);
  });

  it('should not filter an entity', () => {
    component.entities = mockedClientes;
    component.searchFirstParameter = 'nombre';
    component.searchSecondParameter = 'apellido';
    const mockedEvent = {
      target: {
        value: 'Da'
      }
    };
    component.filterEntities(mockedEvent);
    expect(component.entities.length).toEqual(0);
  });

  it('should changed the segment', () => {
    const option = {
      detail: {
        value: 'Precargadas'
      }
    };
    component.changeSegment(option);
    expect(component.activeSegment).toBe('Precargadas');
  });

});
