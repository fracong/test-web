import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { MenuRightComponent } from './menu-right/menu-right.component';
import { LoginIndexComponent } from './login-index/login-index.component';
import { ModeOneComponent } from './modal/mode-one/mode-one.component';
import { TablePagingComponent } from './table-paging/table-paging.component';
import { QueryConditionComponent } from './menu-left/query-condition/query-condition.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLeftComponent,
    MenuRightComponent,
    LoginIndexComponent,
    ModeOneComponent,
    TablePagingComponent,
    QueryConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    JsonpModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
