import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  now: any;
  products: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProducts();
    this.now = new Date();
  }
  getProducts(){
    this._httpService.getAllProducts()
    .then(data =>{
      this.products = data['data'];
    })
    .catch(err => console.log(err))
  }
  // deleteProduct(id){
  //   this._httpService.deleteProductById(id)
  //   .then(()=> this.getProducts())
  //   .catch(err=>console.log(err))
  // }
  deleteProduct(id) {
    this._httpService.deleteProductById(id)
      .then(() => this.getProducts()
      )
      .catch(err => console.log(err))
      
  }
  convertDate(date){
    return new Date(date);
  }

}
