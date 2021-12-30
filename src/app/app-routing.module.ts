import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '',pathMatch:"full" , loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginModule) }, { path: 'register', loadChildren: () => import('./Pages/register/register.module').then(m => m.RegisterModule) }, { path: 'home', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
