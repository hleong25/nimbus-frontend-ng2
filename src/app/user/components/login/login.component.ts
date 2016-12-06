import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
    // TODO: logout
  }

  login() {
    if (this.loginInfo.email.startsWith('demo') && this.loginInfo.password === 'demo') {
      this.router.navigate(['/home']);
      return;
    }

    this.errmsg = 'Login failed. Try again...';

  }

  //get debuginfo() { return JSON.stringify(this.loginInfo, null, ' '); }

}
