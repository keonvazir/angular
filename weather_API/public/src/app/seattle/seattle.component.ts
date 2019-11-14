import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: any;
  temp: any;
  maxTemp: any;
  minTemp: any;
  humidity: any;
  wind: any;
  clouds: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSeattleWeather();
  }
  getSeattleWeather(){
    this._httpService.getWeather("Seattle")
    .then(data =>{
      this.weather = data;
      console.log(data)
    })
    .catch(err=>console.log(err))
  }
  }

