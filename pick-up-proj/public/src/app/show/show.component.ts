import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  event: any;
  eventid: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private_router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      console.log(params['id'])
      this.eventid = params['id']
      this.getSport();
    })
  }
  getSport(){
    this._httpService.getSportById(this.eventid)
    .then(data =>{
      console.log(data);
        this.event = data['data'];
    })
  }

}
