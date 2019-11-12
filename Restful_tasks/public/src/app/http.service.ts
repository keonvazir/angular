import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
    getTasks(){
      // let tempObservable = this._http.get('/tasks');
      // tempObservable.subscribe(data => console.log("Got our tasks!", data));
      return this._http.get("/tasks");
   }
  
    getTasksById(id:string){
      // let tempObservable = this._http.get('/tasks/:id');
      // tempObservable.subscribe(data => console.log("Got our task, using the ID!", data));
      return this._http.get("/tasks/:id");
    }
    
postToServer(num){
  // use the .post() method of HttpClient
  // num must be an object
  // provide the url of your post route - make sure this is set up in your server!
  return this._http.post('/tasks', num);  
  }
}

