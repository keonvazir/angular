import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private socket: Socket
  constructor(private _http: HttpClient) { }
  getAllSports(){
    return this._http.get('/sports')
  }
  getAllUsers(){
    return this._http.get('/sports').toPromise()
  }
  createSport(sport){
    return this._http.post('/sport', sport).toPromise()
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
  getFootball(sport){
    return this._http.get('/sports/football', sport).toPromise()
  }
  getBasketball(sport){
    return this._http.get('/sports/basketball', sport)
  }

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
