import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
// now: any;
users: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getUsers();
    // this.now = new Date();

  }
  getUsers(){
    this._httpService.getAllUsers()
    .then(data=>{
      this.users = data['data'];
    })
    .catch(err => console.log(err))
  }

}
