import {Component} from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  data = [
    {
      name: 'James', age: 24, job: 'Designer', employed: true
    },
    {
      name: 'Jull', age: 33, job: 'Engineer', employed: true
    },
    {
      name: 'Elyse', age: 55, job: 'Architect', employed: false
    }
  ];

  headers = [
    {key: 'employed', label: 'Has a job?'},
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}

  ]
}
