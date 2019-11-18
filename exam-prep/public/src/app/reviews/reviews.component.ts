import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  restaurant: any;
  reviews: any;
  id:any;
  err: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute, private _router: Router, ) { }

  ngOnInit() {
    this.restaurant= {};
    this.err = {};
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
    })
    this._httpService.getByIdRestaurant(this.id)
    .then(data=>{
      this.restaurant=data['data']
      this.reviews = this.restaurant['reviews']
      this.reviews.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
      console.log(this.reviews)
      console.log(this.restaurant)
  })
    .catch(err=>console.log(err))
  }


}
