import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

import { mockedUsuarios } from '../../shared/mocks/mocked-usuarios';
import { UsuariosService } from '../services/usuarios.service';
import { UsuarioResolverService } from './usuario-resolver.service';

describe('UsuarioResolverService', () => {
  let usuarioService: UsuariosService;

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

  const angularFirestoreSpy = jasmine.createSpyObj('AngularFirestore', {
    collection: collectionSpy,
  });

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    TestBed.configureTestingModule({
      providers: [
        UsuariosService,
        { provide: AngularFirestore, useValue: angularFirestoreSpy }
      ]
    }),
      usuarioService = TestBed.inject(UsuariosService);
  });


  it('should be created', () => {
    expect(usuarioService).toBeTruthy();
  });

  it('should resolve', () => {
    const service: UsuarioResolverService = TestBed.inject(UsuarioResolverService);
    const mockedActivatedRouteSnapshot = { params: { id: mockedUsuarios[0].id } };
    service.resolve(mockedActivatedRouteSnapshot as any);
    expect(service).toBeTruthy();
  });
});
