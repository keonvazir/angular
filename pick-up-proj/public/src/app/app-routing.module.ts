import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ChatComponent } from './chat/chat.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/sports'},
  {path: 'sports', component: HomeComponent},
  {path: 'sports/new', component: CreateComponent},
  {path: 'sports/chatroom', component: ChatComponent},
  {path: 'sports/edit/:id', component: EditComponent},
  {path: 'sports/:id', component: ShowComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
