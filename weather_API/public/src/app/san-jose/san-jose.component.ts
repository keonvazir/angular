import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  weather: any;
  temp: any;
  maxTemp: any;
  minTemp: any;
  humidity: any;
  wind: any;
  clouds: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSJWeather();
  }
  getSJWeather(){
    this._httpService.getWeather("San Jose")
    .then(data =>{
      this.weather = data;
      console.log(data)
    })
    .catch(err=>console.log(err))
  }
  }

