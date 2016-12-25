import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../user/index';
import { NimbusAccountService } from '../../../cloud/index';

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

  cloudFiles: string[];


  constructor(
    private router: Router,
    private userService: UserService,
    private contentTypeService: ContentTypeService,
    private nimbusService: NimbusAccountService,
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

    this.cloudFiles = [];

    this.nimbusService.getAll().subscribe({
      next: (files) => this.cloudFiles.push(files.path +'/'+ files.name)
    });
  }

  btninfo(event, contentType) {
    console.log(event, contentType);

    this.nimbusService.fetch();

  }

}
