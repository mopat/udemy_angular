import {Component, Input, OnChanges} from '@angular/core';
import {Email} from "../email";
import {EmailService} from "../email.service";

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnChanges {
  showModal: boolean = false;
  @Input() email: Email = {} as Email;

  constructor(private emailService: EmailService) {
  }

  ngOnChanges(): void {
    const text = this.email.text.replace(/\)n/gi, '\n> ');

    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n--------- ${this.email.from} wrote: \n> ${text}`
    }
  }

  onShowModal() {
    this.showModal = true;
  }

  onSubmit($event: Email) {
    this.emailService.sendEmail(this.email).subscribe(() => {
      this.showModal = false;
    });
  }


}
