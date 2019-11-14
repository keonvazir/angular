import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cake = "";
  cakes = [];
  newCake: any;
  newRating = {rating: "", comment: ""};
  selectedCake;
  avg;

  constructor(private _httpService: HttpService){}

  ngOnInit(){

  }
}
