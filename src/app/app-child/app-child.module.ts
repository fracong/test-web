import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppChildRoutingModule } from './app-child-routing.module';
import { AppChildComponent } from './app-child.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { MyDirectiveDirective } from '../dire/my-directive.directive';
import { MyDirectiveTwoDirective } from '../dire/my-directive-two.directive';


@NgModule({
  declarations: [
    AppChildComponent,
    ChildOneComponent,
    MyDirectiveDirective,
    MyDirectiveTwoDirective
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
