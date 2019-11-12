import { Component} from '@angular/core';
// import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'public';
  gold= 0;
  messages= [];

  addGold(min, max, loc){
    let num = Math.floor(Math.random()* (max-min)+min);
    this.gold += num;

    this.messages.unshift("You have earned "+ num + " gold " + loc);


  }
  
}
