import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  now: any;
  restaurants: any;
  constructor(private _httpService: HttpService, ) { }

  ngOnInit() {
    this.getRestaurants();
    console.log(this.now);
    this.now = new Date();
    console.log(this.now)
  }

  getRestaurants() {
    this._httpService.getAllRestaurants()
      .then(data => {
        this.restaurants = data['data'];
      })
      .catch(err => console.log(err))
  }

  deleteRestaurant(id) {
    this._httpService.deleteRestaurantById(id)
      .then(() => this.getRestaurants())
      .catch(err => console.log(err))
  }

  convertDate(date) {
    return new Date(date);
  }

}
