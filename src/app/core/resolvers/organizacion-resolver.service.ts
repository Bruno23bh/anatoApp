import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Organizacion } from '../interfaces/organizacion';
import { OrganizacionService } from '../services/organizacion.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionResolverService {

  constructor(
    private organizacionesService: OrganizacionService) { }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Organizacion> {
    return this.organizacionesService
      .getOrganizacion(activatedRouteSnapshot.params.organizacionId)
      .pipe(
        take(1)
      );
  }
}
