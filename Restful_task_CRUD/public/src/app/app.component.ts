import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  tasks: any;
  task : any;
  newTask: any;
  // currentTask = false;
  // editTask: any;
  selectedTask: any;

  constructor(private _httpService: HttpService){

  }
  ngOnInit(){
    
    this.task = { "title": "", "description": "" }
    this.newTask = {"title": "", "description": ""}
    this.getTasksFromService();
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe((data) =>{
      console.log("~*******************************************~", data);
      this.tasks = data;
    });
  }
  do(event: any){
    console.log(event);
  }

  getOneTaskFromService(id: String){
    let observable = this._httpService.getTasksById(id)
    observable.subscribe(data=>{
      console.log(data);
      this.selectedTask = data;
    })
  }

  getOneToUpdate(id: String){
    let observable = this._httpService.getTasksById(id);
    observable.subscribe((data)=>{
      this.task = data;
      console.log(data);
    })
  }

  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data =>{
      console.log("~Create~");
      this.newTask = { title: "", description: "" }
      this.getTasksFromService();
    })
  }
  submitUpdate(){
    let observable = this._httpService.editTask(this.task);
    observable.subscribe((data)=>{
      this.newTask = {"title": "", "description": ""}
      this.getTasksFromService();
    })
  }
  
  onEdit(){
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      console.log("~Edit~");
      this.getTasksFromService();
    })
  }
  onDelete(task){
    let observable = this._httpService.deleteTask(task);
    observable.subscribe(data => {
      console.log("~Delete~");
      this.getTasksFromService();
    })
  }
}
