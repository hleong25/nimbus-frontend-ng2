import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

import { NimbusAccountService } from '../../../cloud/index';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // stores the login information
  loginInfo: any = {};

  errmsg: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private nimbusService: NimbusAccountService,
  ) { }

  ngOnInit() {
    // TODO: logout
  }

  login() {
    this.userService
      .login(this.loginInfo.email, this.loginInfo.password)
      .then((user) => {

        return user;
      })
      .then((user) => {
        console.log('Login successful: ', user)
        this.router.navigate(['/home']);

        // TODO -- make this async call 
        this.nimbusService.load();
      })
      .catch((err) => {
        this.errmsg = err;
      });
  }

}
