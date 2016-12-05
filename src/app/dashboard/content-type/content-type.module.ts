import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ContentType } from './models/content-type';
import { ContentTypeComponent } from './components/content-type.component';

import { ContentTypeService } from './services/content-type.service';

export { ContentType } from './models/content-type';
export { ContentTypeService } from './services/content-type.service';
export { ContentTypeComponent } from './components/content-type.component';

@NgModule({
  imports: [
    SharedModule,
  ],

  declarations: [
      ContentTypeComponent,
  ],

  providers: [
      ContentTypeService,
  ],

})
export class ContentTypeModule { }
