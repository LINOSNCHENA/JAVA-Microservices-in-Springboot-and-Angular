import { Component, OnInit } from "@angular/core";
import { Worker } from "../model/worker";
import { Router } from "@angular/router";
import { AccountService } from "../services/account.service";

@Component({
  selector: "app-one-employee",
  templateUrl: "./one-employee.component.html",
  styleUrls: ["./one-employee.component.css"],
})
export class OneEmployeeComponent implements OnInit {

  private worker: Worker;
  constructor(private _empDetailsService: AccountService,
    private _routerDetails: Router) { }

  ngOnInit() {
    this.worker = this._empDetailsService.getter();
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
    this._empDetailsService.saveOrUpdateItem(this.worker.id, this.worker).subscribe(
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
  // 3. Back to fulllist
  formOne() {
    this._empDetailsService.getItems();
    this._routerDetails.navigate(["/"]);
  }
}
