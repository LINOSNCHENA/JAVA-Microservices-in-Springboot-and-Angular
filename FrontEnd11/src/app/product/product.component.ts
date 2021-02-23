import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  worker: any;
  constructor(private _empDetailsService: AccountService,
    private _routerDetails: Router) { }

  ngOnInit() {
   // this.worker = this._empDetailsService.getter();
  }
  completeForm() {
    console.log(this.worker);
    // 1. Test the presence/absence of a worker
    if (this.worker.id == undefined) {
      this._empDetailsService.addItem(this.worker).subscribe(
        (worker) => {
          console.log(worker);
          this._routerDetails.navigate(["/"]);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      // 2. Both update and create worker
      this._empDetailsService.saveOrUpdateItem(this.worker.id,this.worker).subscribe(
        (worker) => {
          console.log(worker);
          this._routerDetails.navigate(["/"]);
        },
        (error) => {
          console.log(error);
        }
      );
     }
  }
  // 3. FULLIST Data
  formOne() {
    this._empDetailsService.getItems();
    this._routerDetails.navigate(["/"]);
  }
}