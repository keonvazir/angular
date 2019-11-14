import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes(){
    return this._http.get("/cakes");
  }
  getOneCake(id: String){
    return this._http.get(`/cakes/${id}`);
  }
  addCake(newCake){
    return this._http.post("/cakes", newCake);
  }
  addRating(newRating, cakeId){
    return this._http.post(`/ratings/${cakeId}`, newRating);
  }
  
}
