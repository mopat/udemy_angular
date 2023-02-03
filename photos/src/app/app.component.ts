import {Component, OnInit} from '@angular/core';
import {PhotoFetchService} from "./services/photo-fetch.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title='photos';
fetchedPhotoUrl: string = '';
  constructor(private photoFetchService: PhotoFetchService) {
  }

  ngOnInit() {
  this.fetchRandomPhoto();
  }

  fetchRandomPhoto(){
    this.photoFetchService.fetchPhoto().subscribe((url)=>{
      this.fetchedPhotoUrl = url;
    })
  }
}
