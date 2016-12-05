import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,

    CoreModule,
    AppRoutingModule
  ],

  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

/*
import {
  DashboardComponent,
  ContentTypeComponent,
  SearchBoxComponent
} from './dashboard/dashboard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContentTypeComponent,
    SearchBoxComponent,
  ],
  exports: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/