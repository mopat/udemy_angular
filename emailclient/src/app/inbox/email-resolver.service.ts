import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Email} from "./email";
import {EmailService} from "./email.service";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  constructor(private emailService: EmailService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Email> {
    const {id} = route.params;

    return this.emailService.getEmail(id).pipe(
      catchError((err) => {
        this.router.navigateByUrl('/inbox/not-found');
        return EMPTY;
      })
    );
  }
}
