import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTasks(){
    return this._http.get("/tasks");
  }

  // getOneTask(task_id){
  //   return this._http.get('/tasks/'+ task_id)
  // }

  getTasksById(id: String){
    return this._http.get(`/tasks/${id}`);
  }

  addTask(newTask){
    return this._http.post("/tasks", newTask)
  }

  updateTask(tasks){
    return this._http.put(`/tasks/${tasks._id}`, tasks)
  }

  deleteTask(id: String){
    return this._http.delete(`/tasks/${id}`);
  }

}
