import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}
  title = 'app';
  tasks = [];
  task ="";
  description = String;
  green = false;

  ngOnInit(){

  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {console.log("Got our tasks!", data)
    this.tasks =data["task"]
  });
  }

  info(idx){
    let observable = this._httpService.getTasksById(idx);
    observable.subscribe(data => {console.log("Found info on task", data)
    this.task = this.task[idx];
    this.green = true;
  });
  }


}
