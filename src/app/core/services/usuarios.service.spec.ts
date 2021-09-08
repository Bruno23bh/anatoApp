import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

import { mockedUsuarios } from '../../shared/mocks/mocked-usuarios';
import { UsuariosService } from './usuarios.service';

describe('UsuariosService', () => {
  let usuariosService: UsuariosService;

  const docSpy = jasmine.createSpyObj({
    valueChanges: of(mockedUsuarios),
    doc: of(mockedUsuarios[0]),
    delete: () => { },
    set: () => { }
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
      usuariosService = TestBed.inject(UsuariosService);
  });

  it('should be created', () => {
    expect(usuariosService).toBeTruthy();
  });

  // it('get usuarios', () => {
  //   usuariosService.getUsuarios();
  //   expect(collectionSpy.valueChanges).toHaveBeenCalled();
  // });

  it('get usuario', () => {
    usuariosService.getUsuario(mockedUsuarios[0].id);
    expect(docSpy.valueChanges).toHaveBeenCalled();
  });

  it('get usuario by email', () => {
    usuariosService.getUsuarioByEmail(mockedUsuarios[0].email);
    expect(collectionSpy.valueChanges).toHaveBeenCalled();
  });

  it('put usuario', () => {
    usuariosService.putUsuario(mockedUsuarios[0], mockedUsuarios[0].id);
    expect(docSpy.set).toHaveBeenCalled();
  });

  it('delete usuario', () => {
    usuariosService.deleteUsuario(mockedUsuarios[0].id);
    expect(docSpy.delete).toHaveBeenCalled();
  });
});
