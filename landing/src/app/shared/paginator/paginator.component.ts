import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input() numberOfPages: number = 1;
  currentPage = 1;


  @Output() pageChange = new EventEmitter();

  constructor() {
  }

  onPageClick(page: number) {
    this.currentPage = page + 1;
    this.pageChange.emit(this.currentPage);
  }
}
