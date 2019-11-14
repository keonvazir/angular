import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather: any;
  temp: any;
  maxTemp: any;
  minTemp: any;
  humidity: any;
  wind: any;
  clouds: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getDallasWeather();
  }
  getDallasWeather(){
    this._httpService.getWeather("Dallas")
    .then(data =>{
      this.weather = data;
      console.log(data)
    })
    .catch(err=>console.log(err))
  }
  }

