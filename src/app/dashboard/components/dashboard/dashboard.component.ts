import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../user/index';
import {
  NimbusAccountService,
  CloudFile,
} from '../../../cloud/index';

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

  private contentTypes: ContentType[] = [];
  private cloudFiles: CloudFile[] = [];

  public constructor(
    private router: Router,
    private userService: UserService,
    private contentTypeService: ContentTypeService,
    private nimbusService: NimbusAccountService,
  ) {
    if (!userService.isLoggedIn()) {
      this.router.navigate(['/user/login']);
    }
  }

  public ngOnInit() {
    this
      .contentTypeService
      .getContentTypes()
      .then(types => {
        this.contentTypes = types;
      });

    this.cloudFiles = [];

    this.nimbusService
      .getFiles()
      .subscribe({
        next: (files) => this.cloudFiles.push(files)
      });
  }

  public btninfo(event: Event, contentType: ContentType) {
    console.log(event, contentType);
    console.log(this.nimbusService.getFiles())

    this.cloudFiles = [];

    this.nimbusService.filter(contentType);

  }

}
