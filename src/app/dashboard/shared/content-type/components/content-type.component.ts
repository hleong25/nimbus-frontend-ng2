import { Component, OnInit, Input } from '@angular/core';
import { ContentType } from '../models/content-type';

import { ContentType as CloudContentType } from '../../../../cloud/models/content-type';

@Component({
  selector: 'content-type',
  templateUrl: './content-type.component.html',
  styleUrls: ['./content-type.component.scss']
})
export class ContentTypeComponent implements OnInit {

  @Input()
  contentType: ContentType = {
    type: CloudContentType.Unknown,
    title: '',
    icon: '',
  };

  constructor() {
  }

  ngOnInit() {
  }

}
