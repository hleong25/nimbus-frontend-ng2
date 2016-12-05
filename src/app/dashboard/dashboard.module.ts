import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard.component';

// import { ContentType } from './content-type/models/content-type';
import {
    //ContentTypeModule,
    //ContentTypeComponent
} from './content-type/content-type.module';
// import { ContentTypeComponent } from './content-type/components/content-type.component';

import {
    SearchBoxModule
} from './search-box/search-box.module';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,

    //ContentTypeModule,

    SearchBoxModule,

  ],

  declarations: [
      DashboardComponent,
      //ContentTypeComponent,
  ],

  exports: [
  ]
})
export class DashboardModule { }
