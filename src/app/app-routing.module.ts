import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
/*import { noIngresadoGuard } from './no-ingresado.guard';
import { ingresadoGuard } from './ingresado.guard';*/

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    /*canActivate: [ingresadoGuard]*/
  },
  {
    path: 'recetas', loadChildren: () => import('./recetas/recetas.module').then( m => m.RecetasPageModule),
    /*canActivate: [ingresadoGuard]*/
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    /*canActivate: [noIngresadoGuard]*/
  },
  {
    path: 'registro', loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    /*canActivate: [noIngresadoGuard]*/
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
