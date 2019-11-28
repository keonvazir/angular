import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  newSport: any;
  id: any;
  err: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newSport ={"name": "", "location": "", "date": "", "capacity":"", "image":"", "description":"", "category": ""};
    this.err = {};
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
    })
    this._httpService.getSportById(this.id)
    .then(data=>this.newSport=data['data'])
    .catch(err=>console.log(err))
  }
  editSport(){
    this._httpService.updateSport(this.newSport)
    .then(data=>{
      if(data['result']=="Failed"){
        this.err = data['data']['errors']
        console.log(data)
      }
      else{
        this._httpService.getAllSports();
        this._router.navigate([`/sports/${this.newSport.category}`])
      }
    })
  }
}
