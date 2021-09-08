import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizacionResolverService } from './resolvers/organizacion-resolver.service';
import { UsuarioResolverService } from './resolvers/usuario-resolver.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home/:userId',
    resolve: {
      usuario: UsuarioResolverService
    },
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'settings/:userId',
    resolve: {
      usuario: UsuarioResolverService
    },
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'users/:userId',
    resolve: {
      usuario: UsuarioResolverService
    },
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: ':userId/organizacion/:organizacionId',
    resolve: {
      organizacion: OrganizacionResolverService
    },
    loadChildren: () => import('./pages/organization/organization.module').then(m => m.OrganizationPageModule)
  },
  {
    path: 'thanks',
    loadChildren: () => import('./pages/thanks/thanks.module').then(m => m.ThanksPageModule)
  },
  {
    path: 'payment/:userId',
    resolve: {
      usuario: UsuarioResolverService
    },
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'payment-successful',
    loadChildren: () => import('./pages/payment-successful/payment-successful.module').then(m => m.PaymentSuccessfulPageModule)
  },
  {
    path: 'payment-failure',
    loadChildren: () => import('./pages/payment-failure/payment-failure.module').then(m => m.PaymentFailurePageModule)
  },
  {
    path: 'goodbye',
    loadChildren: () => import('./pages/goodbye/goodbye.module').then(m => m.GoodbyePageModule)
  },
  {
    path: 'welcome/:userId',
    resolve: {
      usuario: UsuarioResolverService
    },
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
];
@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

