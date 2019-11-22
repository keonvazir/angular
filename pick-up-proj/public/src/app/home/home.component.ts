import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// sport: any;
// id: any;

  constructor(private _httpService: HttpService) { 
    
  }

  ngOnInit() {
    // this.sport;
    // this._route.params.subscribe((params: Params)=>{
    //   console.log(params['id'])
    //   this.id = params['id']
    //   this.getSport(params['id'])
    // })
  }
  // getSport(id){
  //   this._httpService.getSportById(id).subscribe(data =>{
  //     console.log(data);
  //     this.sport = data['data'];
  //   })
  // }

}
