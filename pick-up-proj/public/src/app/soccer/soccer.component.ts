import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {
  events: any;
  category: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.events;
    this.getSport('soccer');
  }
  getSport(category){
    this._httpService.getFootball(category).then(data =>{
      console.log(data);
        this.events = data['data'];
    })
  }
  onClickDelete(id){
    this._httpService.deleteSportById(id)
    .then(()=>this.getSport(id))
    .catch(err=>console.log(err))
    this._router.navigate(['/sports/soccer'])
    }

}
