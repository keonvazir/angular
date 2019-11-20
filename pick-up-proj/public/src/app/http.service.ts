import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllEvents(){
    return this._http.get('/sports')
  }
  createEvent(sport){
    return this._http.post('/sport', sport)
  }
  getEventById(id){
    return this._http.get(`/sports/${id}`)
  }
  updateEvent(sport){
    return this._http.put(`/sports/edit/${sport._id}`, sport)
  }
  deleteEventById(id){
    return this._http.delete(`/sports/${id}`)
  }
}
