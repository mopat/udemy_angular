import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {pluck} from "rxjs/operators";
import {WikipediaResponse} from './interfaces/WikipediaResponse';


@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  url = 'https://en.wikipedia.org/w/api.php?';

  constructor(private http: HttpClient) {
  }

  public search(term: string) {
    // returns Observable; will emit every time it gets a value
    return this.http.get<WikipediaResponse>(this.url, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      pluck('query', 'search')
    )

  }
}
