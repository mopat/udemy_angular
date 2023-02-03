import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {

  @Input() pages: pageItem[] = [];

  constructor() {
  }
}

interface pageItem {
  pageid: number;
  title: string;
  wordcount: string;
  snippet: string
}
