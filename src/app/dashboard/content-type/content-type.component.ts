import { Component, OnInit, Input } from '@angular/core';
import { ContentType } from '../../_models/content-type';

@Component({
  selector: 'content-type',
  templateUrl: './content-type.component.html',
  styleUrls: ['./content-type.component.scss']
})
export class ContentTypeComponent implements OnInit {

  @Input()
  contentType: ContentType = {
    title: '',
    icon: '',
  };

  constructor() {
  }

  ngOnInit() {
  }

}
