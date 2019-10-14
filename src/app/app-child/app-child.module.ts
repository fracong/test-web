import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppChildRoutingModule } from './app-child-routing.module';
import { AppChildComponent } from './app-child.component';
import { ChildOneComponent } from './child-one/child-one.component';


@NgModule({
  declarations: [
    AppChildComponent,
    ChildOneComponent
  ],
  imports: [
    CommonModule,
    AppChildRoutingModule,
  ],
  exports: [
    AppChildComponent,
    ChildOneComponent
  ]
})
export class AppChildModule { }
