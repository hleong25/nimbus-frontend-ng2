import { Component, OnInit } from '@angular/core';
import { ContentType } from './content-type/content-type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contentTypes: ContentType[] = [
    {title: 'documents', icon: 'fa-file-text-o'},
    {title: 'videos', icon: 'fa-film'},
    {title: 'music', icon: 'fa-music'},
    {title: 'pictures', icon: 'fa-camera'}
  ];

  constructor() {
   }

  ngOnInit() {
  }

}
