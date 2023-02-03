import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Email} from "../email";

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email: Email = {} as Email;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({email}) => {
      this.email = email;
    })
  }

  ngOnInit(): void {

    /*   this.route.params.pipe(
         switchMap(({id}) => {
           return this.emailService.getEmail(id);
         })
       ).subscribe((email) => {
         this.email = email;

       });*/
    /*   this.route.params.subscribe(({id}) => {
         this.emailService.getEmail(id).subscribe((email) => {
           this.email = email;
           console.log(email)
         });
       })*/
  }
}
