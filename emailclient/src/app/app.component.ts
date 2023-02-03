import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'emailclient';

  signedin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(private authService: AuthService, private router: Router) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit(): void {
    this.authService.signedin().subscribe({
      next: () => {
       // this.router.navigateByUrl(('inbox'));
      }
    });
  }
}
