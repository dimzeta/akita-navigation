import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotAuthGuard } from './auth/guard/not-auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [NotAuthGuard],
    children: [
      { path: 'register', loadChildren: () => import('./auth/page/register/register.module').then(m => m.RegisterPageModule) },
      { path: 'login', loadChildren: () => import('./auth/page/login/login.module').then(m => m.LoginPageModule) },
      { path: '', redirectTo: 'login', pathMatch: 'full'},
    ]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
