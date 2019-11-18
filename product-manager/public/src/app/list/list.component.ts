import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
products = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.loadPage();
  }

  loadPage(){
    let tempObs = this._httpService.getProducts();
    tempObs.subscribe((data:any)=>{
      this.products = data;
    })
  }
  deleteProduct(id){
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data =>{
      this.loadPage();
    })
  }

}
