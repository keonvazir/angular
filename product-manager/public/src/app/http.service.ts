import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getProducts(){
    return this._http.get('/api/products');
  }
  getProductsById(id: string){
    return this._http.get("/api/products"+ id);

  }
  addProduct(product){
    return this._http.post('/api/add', product);
  }
  editProduct(id: string, editProduct: object){
    return this._http.put("/api/edit/"+ id, editProduct)
  }
  deleteProduct(id:string){
    console.log("~Service: deleteProduct() initialized~", id);
    return this._http.delete("/api/delete/"+id);
  }
}
