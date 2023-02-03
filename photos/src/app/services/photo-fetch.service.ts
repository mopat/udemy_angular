import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {pipe} from "rxjs";
import {map} from "rxjs";
import {UnsplashResponse} from "../interfaces/UnsplashResponse";

@Injectable({
  providedIn: 'root'
})
export class PhotoFetchService {

  constructor(private http: HttpClient) {
  }

  fetchPhoto() {
    const url = 'https://api.unsplash.com/photos/random';

    return this.http.get<UnsplashResponse>(url, {
      headers: {
        Authorization: 'Client-ID zNctKjPwdNjHnTddk6nnVUTSiSmOWOM55dBX3UeQc4Q'
      }
    }).pipe(
      map(value => value.urls.regular)
    )
  }
}
