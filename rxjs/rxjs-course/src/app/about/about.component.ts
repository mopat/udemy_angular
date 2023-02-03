import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject
} from 'rxjs';
import {catchError, delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {HttpClient} from "@angular/common/http";
import {response} from "express";


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const http$ = createHttpObservable('/api/courses');

    const sub = http$.subscribe(console.log)

    setTimeout(() => {
      sub.unsubscribe();
    }, 0)
  }


}






