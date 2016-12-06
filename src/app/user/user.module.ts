import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { UserRoutingModule } from './user-routing.module'
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
  ],

  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
  ],

  exports: [
    UserComponent,
  ]
})
export class UserModule { }
