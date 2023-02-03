import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WeatherModule} from "./weather/weather.module";
import {NotificationsModule} from "./notifications/notifications.module";
import {NewsApiModule} from "./news-api/news-api.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherModule,
    NotificationsModule,
    NewsApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
