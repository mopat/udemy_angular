import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, filter, mergeMap, Observable, of, share, switchMap, tap, toArray, throwError, retry} from "rxjs";
import {map} from "rxjs";
import {NotificationsService} from "../notifications/notifications.service";

interface OpenWeatherResponse {
  list:
    OpenWeatherListItem
}

[]

interface OpenWeatherListItem {
  dt_txt: string,
  main: {
    temp: number
  }
}

export interface Forecast {
  dateString: string,
  temp: string
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  url: string = 'https://api.openweathermap.org/data/2.5/forecast'
  apiKey = '3249ca93012701efe69a6c9dc0b7e9c8';


  constructor(private http: HttpClient,
              private notificationsService: NotificationsService
  ) {
  }

  getCurrentLocation(): Observable<GeolocationCoordinates> {
    return new Observable<any>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => {
          return observer.error(err);
        }
      )
    }).pipe(
      retry(1),
      tap((coords) => {
          this.notificationsService.addSuccess('Got your location');
        }
      ),
      catchError((err) => {
        this.notificationsService.addError('Failed to get location');
        return throwError(err);
      })
    );
  }


  getForecast(): Observable<any> {
    return this.getCurrentLocation().pipe(
      map(coords => {
        return new HttpParams()
          .set('lat', coords.latitude)
          .set('lon', coords.longitude)
          .set('units', 'metric')
          .set('appid', this.apiKey)
      }),
      switchMap(params => this.http.get<OpenWeatherResponse>(this.url, {params})),
      map((response: any) => response.list),
      mergeMap(value => of(...value)),
      filter((value, index) => index % 8 === 0),
      map((value: any) => {
          return {
            dateString: value.dt_txt,
            temp: value.main.temp
          }
        }
      ),
      toArray(),
      share()
    );
  }
}

