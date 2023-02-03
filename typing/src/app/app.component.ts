import {Component, OnInit} from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  randomText = '';
  inputText = '';

  solved = false;

  onChangeInputText(event: any) {
    this.inputText = event.target.value;

    if (this.inputText === this.randomText) {
      this.solved = false;
    }
  }

  ngOnInit(): void {
    this.randomText = lorem.sentence(5);
  }

  compare(a: string, b: string) {
     if(!b){
       return 'pending';
     }

     return a === b ? 'text-green': 'text-red';
  }
}
