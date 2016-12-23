import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

// import { CloudAccount } from './models/cloud-account';
// import { CloudType } from './models/cloud-type';
// import { ContentType } from './models/content-type';
// import { File } from './models/file';
// import { NimbusAccount } from './models/nimbus-account';
// import { User } from './models/user';

// import { CloudAccountService } from './services/cloud-account.service';
import { NimbusAccountService } from './services/nimbus-account.service';

@NgModule({
  imports: [
    CoreModule,
  ],

  declarations: [
  ],

  exports: [
  ],

  providers: [

    //   CloudAccountService,
      NimbusAccountService,
  ]
})
export class CloudModule { }
