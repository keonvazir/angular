import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EnterChatComponent } from './enter-chat/enter-chat.component';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';




// const config: SocketIoConfig = { url: 'http://localhost:7000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ShowComponent,
    HomeComponent,
    EditComponent,
    ChatComponent,
    EnterChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // SocketIoModule.forRoot(config),
    
   
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
