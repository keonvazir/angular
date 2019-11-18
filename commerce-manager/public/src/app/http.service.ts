import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getAllProducts(){
    return this._http.get('/products').toPromise();
  }

  createProduct(data){
    return this._http.post('/product', data).toPromise();
  }

  getByIdProduct(id){
    return this._http.get(`/products/show/${id}`).toPromise();
  }

  updateProduct(data){
    return this._http.put(`/products/${data._id}`, data).toPromise();
  }

  deleteProductById(id){
    return this._http.delete(`/products/delete/${id}`).toPromise();
  }
}