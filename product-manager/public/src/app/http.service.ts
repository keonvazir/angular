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
  getProductsById(id){
    return this._http.get(`/api/products/${id}`);

  }
  addProduct(product){
    return this._http.post('/api/add', product);
  }
  editProduct(product){
    return this._http.put(`/api/edit/${product._id}`, product)
  }
  deleteProduct(id){
    return this._http.delete(`/api/delete/${id}`)
  }
}
