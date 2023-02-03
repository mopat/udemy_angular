import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent {
@Input() lines: number = 1;
@Input() header: boolean = true;

}
