import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Organizacion } from '../interfaces/organizacion';

@Injectable({
  providedIn: 'root',
})
export class OrganizacionService {
  constructor(
    private angularFirestore: AngularFirestore) { }

  // getOrganizaciones(): Observable<Organizacion[]> {
  //   return this.angularFirestore
  //     .collection<Organizacion>(`organizaciones`, ref => ref
  //       .orderBy('apellido'))
  //     .valueChanges();
  // }

  getOrganizacion(organizacionId: string): Observable<Organizacion> {
    return this.angularFirestore
      .collection<Organizacion>('organizaciones')
      .doc<Organizacion>(organizacionId)
      .valueChanges();
  }

  putOrganizacion(organizacion: Organizacion, id?: string) {
    const newId = id ? id : this.angularFirestore.createId();
    return this.angularFirestore
      .collection<Organizacion>('organizaciones')
      .doc<Organizacion>(newId)
      .set({ ...organizacion, id: newId });
  }

  deleteOrganizacion(id: string) {
    return this.angularFirestore
      .collection<Organizacion>('organizaciones')
      .doc<Organizacion>(id)
      .delete();
  }
}
