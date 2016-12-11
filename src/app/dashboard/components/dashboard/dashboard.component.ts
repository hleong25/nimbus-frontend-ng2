import { Component, OnInit } from '@angular/core';

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

  constructor(private contentTypeService: ContentTypeService) {
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
