import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Worker } from 'src/app/services/worker';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  banker = {
    name: '',
    dept: '',
    post: '',
    salary: '',
    published:false
  };

  banker2!: Worker;
  submitted = false;

  constructor(private bnkService: ProductService) { }

  ngOnInit(): void { }

  saveBanker(): void {
    const data = {
      name: this.banker.name,
      dept: this.banker.dept,
      post: this.banker.post,
      salary: this.banker.salary,
      published: this.banker.published,
    };

    this.bnkService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newBanker(): void {
    this.submitted = false;
    this.banker = {
      name: '',
      dept: '',
      post: '',
      salary: '',
      published: this.submitted
    };
    console.log(this.banker)
  }

}
