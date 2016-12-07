import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { UserRoutingModule } from './user-routing.module'
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { User } from './models/user';
import { UserService } from './services/user.service';

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
    LoginComponent,
    RegisterComponent,
  ],

  providers: [
    User,
    UserService,
  ]
})
export class UserModule { }
