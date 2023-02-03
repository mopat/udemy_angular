import {Component} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  showModal: boolean = false;

  accordionData = [
    {title: 'Why is the Sky blue?', content: 'Water'},
    {title: 'Why is the Dude green?', content: 'stupid'}
  ];

  onClick() {
    this.showModal = !this.showModal;
  }
}
