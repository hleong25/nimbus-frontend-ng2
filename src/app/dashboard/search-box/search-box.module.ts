import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { SearchBoxComponent } from './components/search-box.component';


@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
      SearchBoxComponent,
  ],

  exports: [
      SearchBoxComponent,
  ]

})
export class SearchBoxModule { }
