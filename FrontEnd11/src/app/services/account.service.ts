import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
const API_URL = 'http://localhost:8080/full/accounts/';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private worker!: Worker;
  constructor(private _http: HttpClient) {}

  // http://localhost/8080/full/accounts

  addItem(productx: Worker): Observable<any> {
    return this._http.post(API_URL, productx, { responseType: 'json' });
  }
  getItems(): Observable<any> {
    return this._http.get(API_URL, { responseType: 'json' });
  }

  getItem(id: any): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this._http.get(url, { responseType: 'json' });
  }
  saveOrUpdateItem(id: number, productx: Worker): Observable<any> {
    console.log(productx);
    const url = `${API_URL}/${id}`;
    return this._http.put(url, productx, { responseType: 'json' });
  }

  deleteItem(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this._http.delete(url, { responseType: 'json' });
  }

  setter(worker: Worker) {
    this.worker = worker;
  }
  getter() {
    return this.worker;
  }
}
