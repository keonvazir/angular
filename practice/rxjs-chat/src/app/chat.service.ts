import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:8000';
    private socket; 

  constructor() { 
    this.socket = io(this.url);
  }
}
