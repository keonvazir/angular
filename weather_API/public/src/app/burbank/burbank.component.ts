import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';



@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather: any;
  temp: any;
  maxTemp: any;
  minTemp: any;
  humidity: any;
  wind: any;
  clouds: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getBurbankWeather();
  
  }
  getBurbankWeather(){
    this._httpService.getWeather("Burbank, CA, US")
    .then(data =>{
      this.weather = data;
      console.log(data)
    })
    .catch(err=>console.log(err))
  }

}
