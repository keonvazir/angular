import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewResComponent } from './new-res/new-res.component';
import { NewRevComponent } from './new-rev/new-rev.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EditResComponent } from './edit-res/edit-res.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewResComponent,
    NewRevComponent,
    ReviewsComponent,
    RestaurantsComponent,
    EditResComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
