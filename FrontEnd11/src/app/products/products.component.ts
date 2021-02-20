import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Worker } from 'src/app/services/worker';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products?: Worker[];
  activeBanker?: Worker;
  currentIndex = -1;
  name = '';

  constructor(private bnkService: ProductService,
    private _router: Router,) { }

  ngOnInit(): void {
    this.bankersUpdated();
  }

  bankersUpdated(): void {
    this.bnkService.getAll()
      .subscribe(
        data => {
          this.products = data; 
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.bankersUpdated();
    this.activeBanker = undefined;
    this.currentIndex = -1;
  }

  setBankerActive(banker: any, index: number): void {
    this.activeBanker = banker;
    this.currentIndex = index;
  }

  deleteAllBankers(): void {
    this.bnkService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();},
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.bnkService.searchByName(this.name)
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // edit worker
  editBanker(worker: Worker) {
    var id = worker.id;
    console.log("\n======================================\n");
    console.log(id);
    console.log(worker);
    this._router.navigate(['/banks/'+ id ]);
  }

   // add worker
   addBanker() {
    console.log("\n======================================\n");
    this._router.navigate(['/addbanker/']);
  }
}
