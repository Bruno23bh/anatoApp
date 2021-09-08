import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

import { mockedOrganizaciones } from '../../shared/mocks/mocked-organizaciones';
import { OrganizacionService } from '../services/organizacion.service';
import { OrganizacionResolverService } from './organizacion-resolver.service';

describe('OrganizacionResolverService', () => {
  let organizacionService: OrganizacionService;

  const docSpy = jasmine.createSpyObj({
    valueChanges: of(mockedOrganizaciones),
    doc: of(mockedOrganizaciones[0]),
    delete: () => { Promise.resolve(true); },
    set: () => { Promise.resolve(true); }
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
      organizacionService = TestBed.inject(OrganizacionService);
  });

  it('should be created', () => {
    expect(organizacionService).toBeTruthy();
  });

  it('should resolve', () => {
    const service: OrganizacionResolverService = TestBed.inject(OrganizacionResolverService);
    const mockedActivatedRouteSnapshot = { params: { id: mockedOrganizaciones[0].id } };
    service.resolve(mockedActivatedRouteSnapshot as any);
    expect(service).toBeTruthy();
  });
});
