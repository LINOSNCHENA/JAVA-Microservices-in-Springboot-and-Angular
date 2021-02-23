import { Component, OnInit } from '@angular/core';
import { Worker } from '../model/worker';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})

export class AllEmployeesComponent implements OnInit {
  private workers: Worker[];
  constructor(private _employeeService: AccountService, 
    private _router: Router) { }

  ngOnInit() {
    this._employeeService.getItems().subscribe(
      (workers: Worker[]) => { console.log(workers);
         this.workers = workers; }
      , (error) => { console.log(error); })
  }

  // 1. Double
  saveOrUpdateItem(worker) {
    this._employeeService.setter(worker);
    this._router.navigate(['/enrolls']);
  }

  // 2. remove worker
  deleteItem(worker) {
    this._employeeService.deleteItem(worker.id).subscribe(
      (data) => { this.workers.splice(this.workers.indexOf(worker), 1);
      console.log(data);// Data
     }
      , (error) => { 
        
        console.log(error); });
  }

  // 3. new worker
  createItem() {
    let worker = new Worker();
    this._employeeService.setter(worker);
    this._router.navigate(['/enrolls']);
  }
}
