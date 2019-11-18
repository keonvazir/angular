import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewResComponent } from './new-res/new-res.component';
import { NewRevComponent } from './new-rev/new-rev.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EditResComponent } from './edit-res/edit-res.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewResComponent,
    NewRevComponent,
    ReviewsComponent,
    RestaurantsComponent,
    EditResComponent,
    HttpClientModule,
    FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
