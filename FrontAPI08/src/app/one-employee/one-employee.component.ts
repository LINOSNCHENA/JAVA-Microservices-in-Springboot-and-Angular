import { Component, OnInit } from '@angular/core';
import { Worker } from '../model/worker';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-one-employee',
  templateUrl: './one-employee.component.html',
  styleUrls: ['./one-employee.component.css']
})
export class OneEmployeeComponent implements OnInit {
  private worker: Worker; 
  dateX = new Date();
  constructor(private _userService: AccountService, private _rotuer: Router) { }
  ngOnInit() { this.worker = this._userService.getter(); }

  completeForm() {
    console.log(this.worker);
    // Test the presence/absence of a worker
    if (this.worker.id == undefined) {
      this._userService.addItem(this.worker).subscribe((worker) => {
        console.log(worker);
        this._rotuer.navigate(['/']);
      }, (error) => { console.log(error); });
    }
    else {
      // Both update and create worker
      this._userService.saveOrUpdateItem(this.worker).subscribe((worker) => {
        console.log(worker);
        this._rotuer.navigate(['/']);
      }, (error) => { console.log(error); });
    }
  }
}

