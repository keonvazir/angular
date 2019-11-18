import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
newProd: any;
err: any;
  constructor(private _httpService: HttpService,
    private _router: Router) { }

  ngOnInit() {
    this.newProd = { "name": "", "quantity": "", "price": "" };
    this.err = {};
  }
  addProduct(){
    this._httpService.createProduct(this.newProd)
    .then((data)=>{
      if(data['result']=="Failed"){
        this.err = data['data']['errors']
        console.log(this.err)
      }else{
        this._router.navigate(['/'])
      }
    })
  }

}
