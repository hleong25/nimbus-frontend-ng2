import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../user/index';

import {
  ContentType,
  ContentTypeService,
} from '../../shared/content-type/index';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ ContentTypeService ]
})
export class DashboardComponent implements OnInit {

  contentTypes: ContentType[];

  constructor(
    private router: Router,
    private userService: UserService,
    private contentTypeService: ContentTypeService,
  ) {
    if (!userService.isLoggedIn()) {
      this.router.navigate(['/user/login']);
    }
  }

  ngOnInit() {
    this
      .contentTypeService
      .getContentTypes()
      .then(types => {
        this.contentTypes = types;
      });
  }

  btninfo(event, contentType) {
    console.log(event, contentType);
  }

}
