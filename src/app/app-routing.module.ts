import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'homeLog',
    redirectTo: 'folder/Perfil',
    pathMatch: 'full'
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},

  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'imc',
    loadChildren: () => import('./imc/imc.module').then( m => m.IMCPageModule)
  },  {
    path: 'ejercicio',
    loadChildren: () => import('./ejercicio/ejercicio.module').then( m => m.EjercicioPageModule)
  },
  {
    path: 'calcular-calorias',
    loadChildren: () => import('./calcular-calorias/calcular-calorias.module').then( m => m.CalcularCaloriasPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
