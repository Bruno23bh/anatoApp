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
    path: 'quiz/:id',
    loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizPageModule)
  },
  {
    path: 'quizs',
    loadChildren: () => import('./quizs/quizs.module').then(m => m.QuizsPageModule)
  },













];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
