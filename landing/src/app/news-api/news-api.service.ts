import {Injectable} from '@angular/core';
import {map, Observable, pluck, Subject, switchMap, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

export interface NewsApiResponse {
  totalResults: number,
  articles: Article[]
}

export interface Article {
  title: string;
  url: string;
  source: {
    name: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private country = 'de';
  private apiKey = '5959ddb6d79742e4aef2c8edab1a0657';

  private pagesInput: Subject<number>;
  pagesOutput: Observable<Article[]>;
  numberOfPages: Subject<number>;

  constructor(private http: HttpClient) {
    this.pagesInput = new Subject<number>();
    this.numberOfPages = new Subject();

    this.pagesOutput = this.pagesInput.pipe(
      map((page) => {
        return new HttpParams()
          .set('pageSize', this.pageSize)
          .set('apiKey', this.apiKey)
          .set('country', this.country)
          .set('page', page)
      }),
      switchMap((httpParams: HttpParams) => {
        return this.http.get<NewsApiResponse>(this.url, {params: httpParams})
      }),
      tap((response: NewsApiResponse) => {
        this.numberOfPages.next(Math.ceil(response.totalResults / this.pageSize));
      }),
      map((response: NewsApiResponse) => {
        return response.articles;
      })
    );

  }

  getPage(page: number) {
    this.pagesInput.next(page);
  }
}
