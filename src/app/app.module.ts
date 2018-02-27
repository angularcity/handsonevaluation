import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Localization
import {HttpModule, Http} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';
import { AppRoutingModule } from './/app-routing.module';
import { MockdataService } from './test01/mockdata.service';
import { EquiheightDirective } from './test01/equiheight.directive';
import { HeaderComponent } from './common/header/header.component';
import { DropdownDirective } from './common/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test01Component,
    Test02Component,
    EquiheightDirective,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
  })
  ],
  providers: [
    MockdataService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
