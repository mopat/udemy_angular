import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Email} from "../email";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup = {} as FormGroup;
  @Input() email: Email = {} as Email;

  @Output() emailSubmit: EventEmitter<Email> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
    const {subject, from, to, text} = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required]),
      from: new FormControl({value: from, disabled: true}),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    })
  }

  get toControl() {
    return this.emailForm.controls['to'] as FormControl;
  }

  get subjectControl() {
    return this.emailForm.controls['subject'] as FormControl;
  }

  get textControl() {
    return this.emailForm.controls['text'] as FormControl;
  }

  get fromControl() {
    return this.emailForm.controls['from'] as FormControl;
  }

  onSubmit() {
    console.log(this.emailForm.value)
    if (this.emailForm.invalid) {
      return;
    }

    this.emailSubmit.emit(this.emailForm.value as Email);
  }
}
