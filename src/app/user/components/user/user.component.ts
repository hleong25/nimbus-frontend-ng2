import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    let user = this.userService.getUser();
    return (user !== null) && (typeof user.userid !== 'undefined')
  }

  getUserName(): string {
    return this.isLoggedIn() ? this.userService.getUser().name : '';
  }

}
