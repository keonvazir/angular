import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RestaurantsComponent } from '../restaurants/restaurants.component';

@Component({
  selector: 'app-edit-res',
  templateUrl: './edit-res.component.html',
  styleUrls: ['./edit-res.component.css']
})
export class EditResComponent implements OnInit {
  restaurant: any;
  id: any;
  err: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute, private _router: Router,
    private parentComponent: RestaurantsComponent) { }

  ngOnInit() {
    this.restaurant= {};
    this.err = {};
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
    })
    this._httpService.getByIdRestaurant(this.id)
    .then(data=>this.restaurant=data['data'])
    .catch(err=>console.log(err))
  }

  editRestaurant(){
    this._httpService.updateRestaurant(this.restaurant)
    .then(data=>{
      if(data['result']=="Failed"){
        this.err = data['data']['errors']
        console.log(data)
      }else{
        this.parentComponent.getRestaurants();
        this._router.navigate(['/'])
      }
    })
  }

}