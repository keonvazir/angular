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
  currentTask = false;
  editTask: any;
  selectedTask: any;

  constructor(private _httpService: HttpService){

  }
  ngOnInit(){
    // this.getTasksFromService()
    this.task = { "title": "", "description": "" }
    this.newTask = {title: "", description: ""}
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe((data) =>{
      console.log("~*******************************************~", data);
      this.tasks = data;
    });
  }
  getOneTaskFromService(id){
    let observable = this._httpService.getOneTask(id)
    observable.subscribe(data=>{
      console.log(data)
      this.currentTask = data[0];
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
  editForm(task){
    this.editTask = {_id: task._id, title: task.title, description: task.description}
  }
  onEdit(){
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      console.log("~Edit~");
      this.editTog = false;
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
