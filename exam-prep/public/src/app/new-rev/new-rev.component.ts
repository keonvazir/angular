import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-rev',
  templateUrl: './new-rev.component.html',
  styleUrls: ['./new-rev.component.css']
})
export class NewRevComponent implements OnInit {
  newReview: any;
  restaurant: any;
  err: any;
  id:any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute, private _router: Router,) { }

  ngOnInit() {
    this.newReview = {"reviewed_by": "", "rating": 1, "review": ""};
    this.restaurant= {};
    this.err = {};
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
    })
    this._httpService.getByIdRestaurant(this.id)
    .then(data=>this.restaurant=data['data'])
    .catch(err=>console.log(err))
  }

  addReview(){
    this._httpService.createReview(this.newReview, this.id)
    .then(data=>{
      if(data['result']=="Failed"){
        this.err = data['data']['errors']
        console.log(this.err)
      }else{
        this._router.navigate([`/restaurantz/${this.id}`])
      }
    })
  }

}
