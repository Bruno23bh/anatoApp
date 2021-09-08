import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizacionResolverService } from '../core/resolvers/organizacion-resolver.service';
import { UsuarioResolverService } from '../core/resolvers/usuario-resolver.service';

const routes: Routes = [
  {
    path: ':userId/recursos',
    resolve: {
      usuario: UsuarioResolverService
    },
    loadChildren: () => import('./pages/recursos/recursos.module').then(m => m.RecursosPageModule)
  },
  {
    path: ':userId/recursos/normativas/:organizacionId',
    resolve: {
      organizacion: OrganizacionResolverService
    },
    loadChildren: () => import('./pages/normativas/normativas.module').then(m => m.NormativasPageModule)
  },
  {
    path: ':userId/recursos/formularios/:organizacionId',
    resolve: {
      organizacion: OrganizacionResolverService
    },
    loadChildren: () => import('./pages/formularios/formularios.module').then(m => m.FormulariosPageModule)
  },
  {
    path: ':userId/recursos/privados/:organizacionId',
    resolve: {
      organizacion: OrganizacionResolverService
    },
    loadChildren: () => import('./pages/privados/privados.module').then(m => m.PrivadosPageModule)
  }
];
@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
  ],
  exports: [RouterModule]
})
export class RecursosRoutingModule { }
