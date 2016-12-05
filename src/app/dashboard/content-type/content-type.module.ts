import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ContentTypeComponent } from './components/content-type.component';
import { ContentType } from './models/content-type';
import { ContentTypeService } from './services/content-type.service';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
      ContentTypeComponent,
  ],

  exports: [
      ContentTypeComponent,
  ],

  providers: [
      ContentType,
      ContentTypeService,
  ],

})
export class ContentTypeModule { }
