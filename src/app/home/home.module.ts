import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './components/home.component';

@NgModule({
  imports: [
    HomeRoutingModule,
  ],

  declarations: [
    HomeComponent,
  ],

  exports: [
  ]
})
export class HomeModule { }
