import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ContentTypeModule } from './shared/content-type/content-type.module';
import { SearchBoxModule } from './shared/search-box/search-box.module';

@NgModule({
  imports: [
    CoreModule,
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
