import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewResComponent } from './new-res/new-res.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EditResComponent } from './edit-res/edit-res.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewRevComponent } from './new-rev/new-rev.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/restaurantz'},
  {path: 'restaurantz', component: RestaurantsComponent, children:[
    {path: ':id/edit', component: EditResComponent}
  ]},
  {path: 'restaurantz/new', component: NewResComponent},
  {path: 'restaurantz/:id', component: ReviewsComponent},
  {path: 'restaurantz/:id/review', component: NewRevComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
