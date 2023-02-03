import {Component, OnInit} from '@angular/core';
import {Forecast, ForecastService} from "../forecast.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecast$: Observable<Forecast[]>;

  constructor(private forecastService: ForecastService) {
    this.forecast$ = this.forecastService.getForecast();
  }

  ngOnInit(): void {
  }
}
