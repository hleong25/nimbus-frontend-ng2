import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { UserRoutingModule } from './user-routing.module'
import { UserComponent } from './components/user/user.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
  ],

  declarations: [
    UserComponent,
  ],

  exports: [
    UserComponent,
  ]
})
export class UserModule { }
