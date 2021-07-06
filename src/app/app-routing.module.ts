import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'huesos',
    loadChildren: () => import('./huesos/huesos.module').then(m => m.HuesosPageModule)
  },
  {
    path: 'musculos',
    loadChildren: () => import('./musculos/musculos.module').then(m => m.MusculosPageModule)
  },
  {
    path: 'quiz/:id',
    loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizPageModule)
  },
  {
    path: 'periferico',
    loadChildren: () => import('./periferico/periferico.module').then(m => m.PerifericoPageModule)
  },  {
    path: 'central',
    loadChildren: () => import('./central/central.module').then( m => m.CentralPageModule)
  },












];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
