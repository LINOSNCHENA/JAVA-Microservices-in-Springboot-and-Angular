import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Worker } from '../model/worker'
import { AdminsService } from '../services/customas.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  worker!: Worker;
  completeForm() {
    console.log(this.worker);
    if (!this.worker.id) {

      this._AdMinService.addItem(this.worker).subscribe(() => {

        this._AdmRouter.navigate(['/']);
      }, (error) => { console.log(error); });
    }
    else {
      // Both update and create worker
      console.log(this.worker.id);
      var zed = (this.worker);
      this._AdMinService.saveOrUpdateItem(this.worker.id, this.worker).subscribe(() => {
        console.log(zed);
        this._AdmRouter.navigate(['/']);
      }, (error) => { console.log(error); });
    }
  }
  // private workers: Worker[];
  public workers!: Worker[];
  constructor(private _userService: AdminsService,
    private _router: Router, private _AdMinService: AdminsService,
    private _AdmRouter: Router) { }

  ngOnInit() {
    this._userService.getItems().subscribe(
      (workers) => { console.log(workers); this.workers = workers; }
      , (error) => { console.log(error); })
    this.worker = this._AdMinService.getter();
  }

  // Double
  saveOrUpdateItem(worker: Worker) {
    this._userService.setter(worker);
    this._router.navigate(['/products']);
  }

  // remove worker
  deleteItem(worker: Worker) {
    this._userService.deleteItem(worker.id).subscribe(
      () => { this.workers.splice(this.workers.indexOf(worker), 1); }
      , (error) => { console.log(error); });

  }
  // add worker
  newItem() {
    let worker = new Worker();
    this._userService.setter(worker);
    this._router.navigate(['/products']);
  }
  // show all workers
  showlist() {
    this._router.navigate(['/']);
  }
}
