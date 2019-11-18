import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getAllRestaurants(){
    return this._http.get('/restaurants').toPromise();
  }

  createRestaurant(data){
    return this._http.post('/restaurant', data).toPromise();
  }

  getByIdRestaurant(id){
    return this._http.get(`/restaurants/${id}`).toPromise();
  }

  updateRestaurant(data){
    return this._http.put(`/restaurants/${data._id}`, data).toPromise();
  }

  createReview(data, res_id){
    return this._http.post(`/review/${res_id}`, data).toPromise();
  }

  deleteRestaurantById(id){
    return this._http.delete(`/restaurants/${id}`).toPromise();
  }
}