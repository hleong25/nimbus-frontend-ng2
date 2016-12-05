import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    DashboardModule,

    CoreModule,
    AppRoutingModule
  ],

  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
