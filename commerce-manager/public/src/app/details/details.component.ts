import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    
    product: any;
    id: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.product;
    this._route.params.subscribe((params: Params)=>{
        console.log(params['id'])
        this.id = params['id']
        this.getProduct(params['id'])
      })
    //   this._httpService.getByIdProduct(this.id)
    //   .then(data=>this.products=data['data'])
    //   .catch(err=>console.log(err))
  }

getProduct(id){
    this._httpService.getByIdProduct(id).then(data =>{
        console.log(data);
        this.product = data['data'];
    })
}
onClickDelete(id){
    this._httpService.deleteProductById(id)
    .then(()=>this.getProduct(id))
    .catch(err=>console.log(err))
    this._router.navigate(['/'])
    
    }


}