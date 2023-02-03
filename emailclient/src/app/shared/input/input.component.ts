import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() label: string = '';
  @Input() control: FormControl<any> = new FormControl<any>('');
  @Input() controlType = 'input';

  @Input() type: string = 'text';

  showErrors() {
    const {touched, errors} = this.control;

    return touched && errors;
  }
}
