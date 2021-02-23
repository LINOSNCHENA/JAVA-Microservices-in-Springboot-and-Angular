import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Worker } from 'src/app/services/worker';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  workers!: Worker[];

  private workerjs!: Worker[];
  constructor(private _userService: AccountService, private _router: Router) { }

  ngOnInit() {
    this._userService.getItems().subscribe(
      (workers: Worker[]) => { console.log(workers); this.workers = workers; }
      , (error: any) => { console.log(error); })
  }

  // Double
  saveOrUpdateItem(worker: any) {
    this._userService.setter(worker);
    this._router.navigate(['/enrolls']);
  }

  // remove worker
  deleteItem(worker: Worker) {
    this._userService.deleteItem(worker.id).subscribe(
      (data: any) => { this.workers.splice(this.workers.indexOf(worker), 1); }
      , (error: any) => { console.log(error); });
  }

  // new worker
  createItem() {
    let worker = new Worker();
   // this._userService.setter(worker);
    this._router.navigate(['/enrolls']);
  }
}
