import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather: any;
  temp: any;
  maxTemp: any;
  minTemp: any;
  humidity: any;
  wind: any;
  clouds: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getChicagoWeather();
  }
  getChicagoWeather(){
    this._httpService.getWeather("Chicago")
    .then(data =>{
      this.weather = data;
      console.log(data)
    })
    .catch(err=>console.log(err))
  }
  }
