import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppChildComponent } from './app-child.component';
import { ChildOneComponent } from './child-one/child-one.component';

const childRoutes: Routes = [
  { path: 'child',
    component: AppChildComponent,
    children: [
      { path: 'one',
        component: ChildOneComponent
      },
      { path: 'two',
        component: ChildOneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class AppChildRoutingModule { }
