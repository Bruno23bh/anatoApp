import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {

  constructor(
    private angularFirestore: AngularFirestore) { }

  // getUsuarios(): Observable<Usuario[]> {
  //   return this.angularFirestore
  //     .collection<Usuario>(`usuarios`, ref => ref
  //       .orderBy('apellido'))
  //     .valueChanges();
  // }

  getUsuario(usuarioId: string): Observable<Usuario> {
    return this.angularFirestore
      .collection<Usuario>('usuarios')
      .doc<Usuario>(usuarioId)
      .valueChanges();
  }

  getUsuarioByEmail(email: string) {
    return this.angularFirestore
      .collection<Usuario>('usuarios', ref => ref
        .where('email', '==', email))
      .valueChanges();
  }

  putUsuario(usuario: Usuario, id?: string) {
    const newId = id ? id : this.angularFirestore.createId();
    return this.angularFirestore
      .collection<Usuario>('usuarios')
      .doc<Usuario>(newId)
      .set({ ...usuario, id: newId });
  }

  deleteUsuario(id: string) {
    return this.angularFirestore
      .collection<Usuario>('usuarios')
      .doc<Usuario>(id)
      .delete();
  }
}
