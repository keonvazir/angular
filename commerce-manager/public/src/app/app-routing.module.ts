import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/products'},
  {path: 'products', component: ListComponent, children:[
    {path: ':id/edit', component: EditComponent},
    {path: ':id', component: DetailsComponent}
  ]},
  {path: 'products/new', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
