import {Component} from '@angular/core';
import {WikipediaService} from "./wikipedia.service";
import {WikipediaResponse} from "./interfaces/WikipediaResponse";

//import {Observable} from "rxjs";
import {pluck} from 'rxjs/operators';

/*
interface Car {
  year: number;
  color: string;
  running: boolean;
  make: {
    name: string;
    dateCreated: number;
  }
}

const oberservable = new Observable<Car>((observer) => {
  const car = {
    year: 2000,
    color: 'red',
    running: true,
    make: {
      name: 'Chevy',
      dateCreated: 1950
    }
  }
  observer.next(car);
}).pipe(
pluck('make', 'dateCreated')
);

oberservable.subscribe((value: number) => {
  console.log(value);
})
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: any = [];

  constructor(private wikipediaService: WikipediaService) {
  }

  onTerm(term: string) {
    console.log(term)
    // will fire every time the search function emits a value
    this.wikipediaService.search(term).subscribe((response) => {
      this.results = response;
      console.log(this.results)
    });
  }
}
