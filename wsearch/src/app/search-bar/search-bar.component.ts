import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  term: string = '';


  onTermChange(target: any) {
    this.term = target.value;

    //https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space
  }

  onFormSubmit(event: any){
    event.preventDefault();
    this.submitted.emit(this.term);
    console.log(this.term)
  }

}
