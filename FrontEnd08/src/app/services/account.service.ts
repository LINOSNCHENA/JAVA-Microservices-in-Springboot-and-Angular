import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Worker } from '../model/worker'
// import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    private url1: string = "http://localhost:8080/full";
    private url: string = 'http://localhost:8080/full/accounts';
    private headers = new Headers({ "Content-Type": "application/json" });
    private options = new RequestOptions({ headers: this.headers });      // Data type Server
    private worker: Worker;
    constructor(private _http: Http) { }

    // http://localhost/8080/full/accounts                             //  GET+POST+Update(3)
    getItems() {
        return this._http.get(this.url1 + "/accounts", this.options)
            //.map(response => {response.json(), console.log(response)})
            .map((response: Response) => response.json())
            .catch(this.errorPost);
    }


    addItem(worker: Worker) {
        return this._http.post(this.url1 + "/accounts", JSON.stringify(worker), this.options)
            //   .map((response: Response) => response.json())
            .map(response => { response.json(), console.log(response) })
            .catch(this.errorPost);
    }
    saveOrUpdateItem22(worker: Worker) {
        return this._http.put(this.url1 + "/accounts", JSON.stringify(worker), this.options)
            // .map((response: Response) => response.json())
            .map(response => { response.json(), console.log(response) })
            .catch(this.errorPost);
    }
    saveOrUpdateItem(id: number, productx: Worker): Observable<any> {
        console.log(productx);
        const url = `${this.url}/${id}`;
        return this._http.put(url, productx, this.options);
      }

    // http://localhost/8080/full/accounts/:id                          //  GET/DELETE/ERROR(3)
    getItem(id: number) {
        return this._http.get(this.url1 + "/accounts/" + id, this.options)
            //    .map((response: Response) => response.json())
            .map(response => { response.json(), console.log(response) })
            .catch(this.errorPost);
    }

    deleteItem2(id: number) {
        // 4
        return this._http
          .delete(this.url1 + '/accounts/' + id, this.options)
          .map((res) => res.json())
          .catch(this.errorPost);
      }

    deleteItem(id: number) {
        return this._http.delete(this.url1 + "/accounts/" + id, this.options)
            // .map((response:Response)=>response.json())
            .map(response => { response.json(), console.log(response) })
            .catch(this.errorPost);
    }


    errorPost(error: Response) {
        return Observable.throw(error || "SERVER ERROR");
    }
    setter(worker: Worker) { this.worker = worker; }
    getter() { return this.worker; }
}
