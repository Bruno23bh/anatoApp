import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Usuario } from '../interfaces/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioResolverService {

  constructor(
    private usuarioService: UsuariosService
  ) { }

  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Usuario> {
    return this.usuarioService
      .getUsuario(activatedRouteSnapshot.params.userId)
      .pipe(
        take(1)
      );
  }
}
