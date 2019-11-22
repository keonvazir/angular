import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

// import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private socket: Socket
  constructor(private _http: HttpClient) { }

  getSportList() {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    return this._http.get('/src/app/data/users.json', { headers });
}
  getAllSports(){
    return this._http.get('/sports_json')
  }
  getAllUsers(){
    return this._http.get('/users_json').toPromise()
  }
  createSport(sport, user){
    return this._http.post('/sport_json', sport).toPromise()
  }
  createUser(user){
    return this._http.post('/user_json', user).toPromise()
  }
  getSportById(id){
    return this._http.get(`/sports_json/${id}`)
  }
  updateSport(sport){
    return this._http.put(`/sports_json/edit/${sport._id}`, sport)
  }
  deleteSportById(id){
    return this._http.delete(`/sports_json/${id}`).toPromise()
  }
  getFootball(category){
    return this._http.get('/sports_cat_json/'+ category).toPromise()
  }
  // getBasketball(sport){
  //   return this._http.get('/sports_json/basketball', sport)
  // }
  // getSoccer(sport){
  //   return this._http.get('/sports_json/football', sport).toPromise()
  // }
  // getVolleyball(sport){
  //   return this._http.get('/sports_json/basketball', sport)
  // }

  // new_user(roomName: string, name: string){
  //   this.socket.emit("message", roomName);
  //   this.socket.emit("message", name);
  // }
  // get_all_messages(){
  //   return this.socket
  //     .fromEvent("message")
  // }
  // got_new_message(msg: string, roomName: string, sender:'name'){
  //   this.socket.emit("message", msg);
  // }
  // new_message(){
  //   return this.socket
  //   .fromEvent("messages")
  // }
  // user_connected(){
  //   return this.socket
  //   .fromEvent("messages")
  // }
  // user_disconnected(){
  //   return this.socket
  //   .fromEvent("messages")
  // }

}
