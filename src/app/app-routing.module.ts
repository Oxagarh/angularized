import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedGuard } from './core/guards/logged.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'drinks',
  // },
  {
    path: '',
    canActivate: [LoggedGuard],
    loadChildren: (): Promise<any> =>
      import('./modules/authentication/authentication.module').then(
        (module) => module.AuthenticationModule
      ),
  },
  {
    path: 'drinks',
    canLoad: [AuthGuard],
    data: { rolesNeeded: 'any'},
    loadChildren: (): Promise<any> =>
      import('./modules/drinks/drinks.module')
        .then((module) => module.DrinksModule)
  },
  {
    path: 'users',
    canLoad: [AuthGuard],
    data: { rolesNeeded: 'superuser'},
    loadChildren: (): Promise<any> =>
      import('./modules/users/users.module')
        .then((module) => module.UsersModule)
  }
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: '',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
