import {Component} from '@angular/core';
import {Email} from "../email";
import {AuthService} from "../../auth/auth.service";
import {EmailService} from "../email.service";

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent {
  showModal: boolean = false;
  email: Email = {from: `${this.authService.username}@angular-email.com`} as Email;

  constructor(private authService: AuthService, private emailService: EmailService) {
  }


  onModalDismiss() {
    this.showModal = false;
  }

  onEmailSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
