import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
fullname: any;
newSport: any;
err: any;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newSport = {"name": "", "location": "", "date": "", "capacity":"", "image":""};
    this.fullname = {"name": "", "level": ""};
    this.err = {};
  }
  addSport(){
    this._httpService.createSport(this.newSport)
    .subscribe((data)=>{
      if(data['result']=="Failed"){
        this.err = data['data']['errors']
        console.log(this.err)
      }else{
        this._router.navigate([`/sports/:_id`])
      }
    })
  }

}
