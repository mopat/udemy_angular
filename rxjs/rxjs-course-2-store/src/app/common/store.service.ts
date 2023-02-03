import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject, timer} from "rxjs";
import {Course} from "../model/course";
import {createHttpObservable} from "./util";
import {delayWhen, filter, first, map, retryWhen, shareReplay, tap} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})
export class Store {

  private subject = new BehaviorSubject<Course[]>([]);
  courses$: Observable<Course[]> = this.subject.asObservable();

  init() {
    const http$ = createHttpObservable('/api/courses');

    http$
      .pipe(
        tap(() => console.log("HTTP request executed")),
        map(res => Object.values(res["payload"])),
        shareReplay()
      ).subscribe(
      courses => this.subject.next(courses)
    );


  }

  public selectBeginnerCourses(): Observable<Course[]> {
    return this.filterByCategory('BEGINNER');
  }

  public selectAdvancedCourses(): Observable<Course[]> {
    return this.filterByCategory('ADVANCED');
  }

  filterByCategory(category: string): Observable<Course[]> {
    return this.courses$.pipe(
      map(courses =>
        courses.filter(course => course.category === category)
      )
    )
  }

  saveCourse(courseId: number, changes) {
    const courses = this.subject.getValue();

    const courseIndex = courses.findIndex(course => course.id == courseId);

    const newCourses = courses.slice(0);
    const course = this.subject.pipe(
      map(courses => courses.filter(course => course.id == courseId)),
      first()
    ).subscribe();

    newCourses[courseIndex] = {
       ...courses[courseIndex],
      ...course,
      ...changes
    }

    this.subject.next(newCourses);

    return fromPromise(fetch(`api/courses/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(newCourses),
        headers: {
          'content-type': 'application/json'
        }
      })
    );
  }

  selectCourseById(courseId: number) {
    return this.courses$
      .pipe(
        map(courses => courses.find(course => course.id === courseId)),
        filter(course => !!course)
      )
  }
}
