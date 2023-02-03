import {Injectable} from "@angular/core";
import {AbstractControl, FormGroup, Validator} from "@angular/forms";

@Injectable({providedIn: 'root'})
export class MatchPassword implements Validator{
  validate(formGroup: AbstractControl) {

    const password = formGroup.get('password')?.value;
    const passwordConfirmation = formGroup.get('passwordConfirmation')?.value;
    console.log(password)
    if (password === passwordConfirmation) {
      return null;
    } else {
      return {passwordsDontMatch: true};
    }


  }
}
