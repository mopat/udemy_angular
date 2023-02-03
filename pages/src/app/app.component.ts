import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [

    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1587502536575-6dfba0a6e017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the House',
      url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Desk',
      url: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vdGVib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Wake',
      url: 'https://images.unsplash.com/photo-1531001602318-1916852b9205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FrZWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1587502536575-6dfba0a6e017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the House',
      url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Desk',
      url: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vdGVib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Wake',
      url: 'https://images.unsplash.com/photo-1531001602318-1916852b9205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FrZWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1587502536575-6dfba0a6e017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the House',
      url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Desk',
      url: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vdGVib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Wake',
      url: 'https://images.unsplash.com/photo-1531001602318-1916852b9205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FrZWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1587502536575-6dfba0a6e017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the House',
      url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Desk',
      url: 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vdGVib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Wake',
      url: 'https://images.unsplash.com/photo-1531001602318-1916852b9205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FrZWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
  ]

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }
}
