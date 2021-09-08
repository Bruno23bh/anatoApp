import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'core/login', pathMatch: 'full' },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'quiz/:id',
    loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizPageModule)
  },
  {
    path: 'quizs',
    loadChildren: () => import('./quizs/quizs.module').then(m => m.QuizsPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then(m => m.ResultsPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () =>
      import('./recursos/recursos.module').then((m) => m.RecursosModule)
  },
  {
    path: 'not-allow',
    loadChildren: () => import('./shared/pages/not-allow/not-allow.module').then(m => m.NotAllowPageModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () => import('./shared/pages/not-found/not-found.module').then(m => m.NotFoundPageModule)
  },














];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
