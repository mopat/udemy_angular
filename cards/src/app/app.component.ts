import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      'content': 'tree content'
    },
    {
      title: 'Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountationlover',
      'content': 'mountaion content'
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking12222',
      'content': 'biking content'
    }
  ];
}
