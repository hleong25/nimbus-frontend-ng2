import { Component, OnInit } from '@angular/core';

import { ContentType } from '../_models/content-type';
import { ContentTypeService } from '../_services/content-type.service';

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
