// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ProductService } from '../services/product.service';
import { Worker } from 'src/app/services/worker';
// import { AccountService } from '../services/account.service';


import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  worker!: Worker; 
  dateX = new Date();
  constructor(private _userService: AccountService, private _rotuer: Router) { }
  ngOnInit() {// this.worker = this._userService.getter(); 
  }

  completeForm() {
  //   console.log(this.worker);
  //   // Test the presence/absence of a worker
  //   if (this.worker.id == undefined) {
  // //    this._userService.addItem(this.worker).subscribe((worker) => {
  //       this._userService.addItem(this.worker).subscribe((res: Worker[]) => {
  //       console.log(worker);
  //       this._rotuer.navigate(['/']);
  //     }, (error) => { console.log(error); });
  //   }
  //   else {
  //     // Both update and create worker
  //     this._userService.saveOrUpdateItem(this.worker).subscribe((worker) => {
  //       console.log(worker);
  //       this._rotuer.navigate(['/']);
  //     }, (error) => { console.log(error); });
  //   }
  }

}
