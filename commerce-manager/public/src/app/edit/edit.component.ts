import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
product: any;
id: any;
err: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute, private _router: Router,
    private parentComponent: ListComponent) { }

  ngOnInit() {
    this.product = {};
    this.err = {};
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
    })
    this._httpService.getByIdProduct(this.id)
    .then(data=>this.product=data['data'])
    .catch(err=>console.log(err))
  }
  editProduct(){
    this._httpService.updateProduct(this.product)
    .then(data=>{
      if(data['result']=="Failed"){
        this.err = data['data']['errors']
        console.log(data)
      }else{
        this.parentComponent.getProducts();
        this._router.navigate(['/'])
      }
    })
  }



}
