import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllSports(){
    return this._http.get('/sports')
  }
  createSport(sport){
    return this._http.post('/sport', sport)
  }
  getSportById(id){
    return this._http.get(`/sports/${id}`)
  }
  updateSport(sport){
    return this._http.put(`/sports/edit/${sport._id}`, sport)
  }
  deleteSportById(id){
    return this._http.delete(`/sports/${id}`)
  }
}
