import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-res',
  templateUrl: './new-res.component.html',
  styleUrls: ['./new-res.component.css']
})
export class NewResComponent implements OnInit {
  newRest: any;
  err: any;
  constructor(private _httpService: HttpService,
    private _router: Router) { }

  ngOnInit() {
    this.newRest = { "name": "", "cuisine": "" };
    this.err = {};
  }

  addRestaurant() {
    this._httpService.createRestaurant(this.newRest)
      .then((data) => {
        if(data['result']=="Failed"){
          this.err = data['data']['errors']
          console.log(this.err)
        }else{
          this._router.navigate(['/'])
        }
      })
  }


}
