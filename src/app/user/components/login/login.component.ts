import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

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
  ) { }

  ngOnInit() {
    // TODO: logout
  }

  login() {
    this.userService
      .login(this.loginInfo.email, this.loginInfo.password)
      .then((user) => {
        console.log('Login successful: ', user)
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        this.errmsg = err;
      });
  }

}
