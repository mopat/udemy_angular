import {Injectable} from "@angular/core";
import {AbstractControl, AsyncValidator} from "@angular/forms";
import {of} from "rxjs";
import {map, catchError} from "rxjs/operators";
import {AuthService} from "../auth.service";

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {
  }

  validate = (control: AbstractControl) => {
    return this.authService.checkUsername(control.value)
      .pipe(
        map((value) => {
          console.log(value)
          if (value.available) {
            return null;
          }
          return of({nonUniqueUsername: true});

        }),
        catchError((err) => {
          return of({nonUniqueUsername: true});
        })
      );
  }
}
