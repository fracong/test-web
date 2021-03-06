import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { MenuRightComponent } from './menu-right/menu-right.component';
import { LoginIndexComponent } from './login-index/login-index.component';
import { ModeOneComponent } from './modal/mode-one/mode-one.component';
import { TablePagingComponent } from './table-paging/table-paging.component';
import { ModeTwoComponent } from './modal/mode-two/mode-two.component';
import { TestPipePipe } from './pipe/test-pipe.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuLeftComponent,
    MenuRightComponent,
    LoginIndexComponent,
    ModeOneComponent,
    TablePagingComponent,
    ModeTwoComponent,
    TestPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
