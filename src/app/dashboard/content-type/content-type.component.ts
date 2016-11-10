import { Component, OnInit, Input } from '@angular/core';
import { ContentType } from './content-type';

@Component({
  selector: 'app-content-type',
  templateUrl: './content-type.component.html',
  styleUrls: ['./content-type.component.css']
})
export class ContentTypeComponent implements OnInit {

  @Input()
  contentType: ContentType;

  constructor() {
  }

  ngOnInit() {
  }

}
