import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  signinForm = new FormGroup(
    {
      username: new FormControl('',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]*$/)
        ]
      ),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]
      )
    }
  )

  onSubmit() {

    if (this.signinForm.invalid) {
      return;
    }


    this.authService.signin(
      {
        username: this.signinForm.controls['username'].value as string,
        password: this.signinForm.controls['password'].value as string
      }
    ).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: ({error}) => {
        if (error.username || error.password) {
          this.signinForm.setErrors({credentials: true});
        }
      }
    })
  }

  get usernameControl() {
    return this.signinForm.controls['username'] as FormControl;
  }

  get passwordControl() {
    return this.signinForm.controls['password'] as FormControl;
  }
}
