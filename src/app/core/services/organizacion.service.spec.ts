import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

import { mockedOrganizaciones } from '../../shared/mocks/mocked-organizaciones';
import { OrganizacionService } from './organizacion.service';

describe('OrganizacionesService', () => {
  let organizacionesService: OrganizacionService;

  const docSpy = jasmine.createSpyObj({
    valueChanges: of(mockedOrganizaciones),
    doc: of(mockedOrganizaciones[0]),
    delete: () => { },
    set: () => { }
  });

  const collectionSpy = jasmine.createSpyObj({
    valueChanges: of(mockedOrganizaciones),
    doc: docSpy
  });

  const angularFirestoreSpy = jasmine.createSpyObj('AngularFirestore', {
    collection: collectionSpy,

  });

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    TestBed.configureTestingModule({
      providers: [
        OrganizacionService,
        { provide: AngularFirestore, useValue: angularFirestoreSpy }
      ]
    }),
      organizacionesService = TestBed.inject(OrganizacionService);
  });

  it('should be created', () => {
    expect(organizacionesService).toBeTruthy();
  });

  // it('get organizaciones', () => {
  //   organizacionesService.getOrganizaciones();
  //   expect(collectionSpy.valueChanges).toHaveBeenCalled();
  // });

  it('get organizacion', () => {
    organizacionesService.getOrganizacion(mockedOrganizaciones[0].id);
    expect(docSpy.valueChanges).toHaveBeenCalled();
  });

  it('put organizacion', () => {
    organizacionesService.putOrganizacion(mockedOrganizaciones[0], mockedOrganizaciones[0].id);
    expect(docSpy.set).toHaveBeenCalled();
  });

  it('delete organizacion', () => {
    organizacionesService.deleteOrganizacion(mockedOrganizaciones[0].id);
    expect(docSpy.delete).toHaveBeenCalled();
  });
});
