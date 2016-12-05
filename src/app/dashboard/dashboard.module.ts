import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';

import { ContentTypeModule } from './content-type/content-type.module';
import { SearchBoxModule } from './search-box/search-box.module';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    ContentTypeModule,
    SearchBoxModule,

  ],

  declarations: [
    DashboardComponent,
  ],

  exports: [
  ],

  providers: [

  ]
})
export class DashboardModule { }
