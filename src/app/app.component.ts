import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user/user.exports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nimbus';
  description = '{cloud storage manager}';

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

}
