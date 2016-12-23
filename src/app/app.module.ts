import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';

import { CloudModule } from './cloud/cloud.module';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    DashboardModule,
    UserModule,
    CloudModule,

    CoreModule,
    AppRoutingModule
  ],

  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
