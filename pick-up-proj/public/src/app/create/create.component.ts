import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
//name = new FormControl('');
user: any;
newSport: any;
events: [];
event: "";
err: any;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getEventsFromService();
    this.newSport = {"name": "", "location": "", "date": "", "capacity":"", "image":"", "description":"", "category": ""};
    this.user = {"fullname": "", "level": ""};
    this.err = {};
  }
  getEventsFromService(){
    let observable = this._httpService.getAllSports();
    observable.subscribe((data)=>{
      console.log(data);
      this.events = data["event"]
    });
  }
  addSport(){
    console.log("TRYING TO ADD SPORT")
    
    this._httpService.createUser(this.user)
    .then((user)=>{
      this._httpService.createSport(this.newSport, user)
      .then((data)=>{
        if(data['result']=="Failed"){
          console.log(this.newSport)
          this.err = data['data']['errors']
          console.log(this.err)
        }else{
          //should direct to the specific category's main page!
          //***** */
          
          this._router.navigate([`/sports/${this.newSport.category}`])
          this.getEventsFromService();
        }
      })
      .catch(err => console.log(err))
    })
  }

}
