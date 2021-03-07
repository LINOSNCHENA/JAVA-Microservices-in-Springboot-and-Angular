import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Worker } from '../model/worker';
import { AdminsService } from '../services/customas.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  
  public workers!: Worker[];
  constructor(
    private _router: Router,
    private _admservice: AdminsService,
    private service: ProductService
  ) {}

  ngOnInit() {
    this._admservice.getItems().subscribe(
      (workers: Worker[]) => {
        console.log(workers);
        this.workers = workers;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // Double
  saveOrUpdateItem(worker: Worker) {
    this._admservice.setter(worker);
    this._router.navigate(['/product']);
  }
  // remove worker
  deleteItem(worker: Worker) {
    this._admservice.deleteItem(worker.id).subscribe(
      (data: any) => {
        this.workers.splice(this.workers.indexOf(worker), 1);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  // add worker
  newItem() {
    let worker = new Worker();
    this._admservice.setter(worker);
    this._router.navigate(['/product']);
  }
}
