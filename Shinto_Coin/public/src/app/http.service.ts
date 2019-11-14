import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  coinValue = 1;
  yourCoins = 0;
  journal = [];
  trans: any;
  constructor(private _http: HttpClient) { }

  coinTrans(action, qty): void{
    let transId = Math.floor(1+ Math.random()* (9999-1));
    let trans = {
      id: transId,
      action: action,
      qty: qty,
      value: this.coinValue
    }
    this.journal.push(trans);
  }
}
