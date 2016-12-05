import { Component, OnInit } from '@angular/core';

import {
  ContentType,
  ContentTypeService,
  ContentTypeModule,
} from '../content-type/content-type.module';

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

}
