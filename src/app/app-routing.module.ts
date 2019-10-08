import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginIndexComponent } from './login-index/login-index.component';
import {MenuLeftComponent} from './menu-left/menu-left.component';
import {MenuRightComponent} from './menu-right/menu-right.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginIndexComponent
  },
  {
    path: '',
    component: LoginIndexComponent
  },
  {
    path: 'menu-left',
    component: MenuLeftComponent
  },
  {
    path: 'menu-right',
    component: MenuRightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
