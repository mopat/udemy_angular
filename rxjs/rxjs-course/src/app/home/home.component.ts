import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {
  catchError,
  delay,
  delayWhen,
  filter,
  finalize,
  map,
  retryWhen,
  share,
  shareReplay,
  take,
  tap
} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {Store} from '../common/store.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;


  constructor(private store: Store) {

  }

  ngOnInit() {

    const http$ = createHttpObservable('/api/courses');

    const courses$: Observable<Course[]> = http$.pipe(
      catchError((err) => {
        console.log(err)
        throw err;
      }),
      tap((next) => {
        console.log(next)
      }),
      map((body: any) => body.payload),
      shareReplay(),
      retryWhen(errors => {
        return errors.pipe(
          delayWhen(() => {
            return timer(2000);
          })
        );
      })
    );

    console.log(courses$)

    this.beginnerCourses$ = courses$.pipe(
      map((courses: Course[]) => {
        return courses.filter(item => item.category === 'BEGINNER')
      }),
      finalize(() => {
        console.log('complete')
      })
    );


    this.advancedCourses$ = courses$.pipe(
      map((courses: Course[]) => {
        return courses.filter(item => item.category === 'ADVANCED')
      }),
      finalize(() => {
        console.log('complete')
      })
    );

  }

}
