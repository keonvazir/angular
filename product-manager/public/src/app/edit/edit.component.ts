import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
product: object;
editProduct: any;
error: any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findProduct();
    this.editProduct = {title: "", price: 0.00, image: ""};
  }
  findProduct(){
    this._route.params.subscribe((params)=>{
      let tempObs = this._httpService.getProductsById(params["id"]);
      tempObs.subscribe((data:any)=>{
        this.editProduct = data;
      })
    })
  }
  editSubmit(){
    this._route.params.subscribe((params)=>{
      let tempObs = this._httpService.editProduct(params['id'], this.editProduct);
      tempObs.subscribe((data:any)=>{
        if(!data.error){
          this._router.navigate(["/products"]);
        }
        else{
          console.log("~Componenet: editSubmit() Error~", data.error)
        }
      })
    })
  }

}
