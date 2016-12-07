import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { UserRoutingModule } from './user-routing.module'
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { User } from './models/user';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CoreModule,
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
