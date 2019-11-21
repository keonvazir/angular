import { Component } from '@angular/core';
import { ChatService } from './app.chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-chat';
  constructor(chatService: ChatService) { }
}

