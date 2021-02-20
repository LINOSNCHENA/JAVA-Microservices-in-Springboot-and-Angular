import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Worker } from 'src/app/services/worker';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  activeBanker!: Worker;
  message = '';

  constructor(
    private bnkService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getBanker(this.route.snapshot.params.id);
  }

  getBanker(id: string): void {
    this.bnkService.get(id)
      .subscribe(
        (        data: any) => {
          this.activeBanker = data;
          console.log(data);
        },
        (        error: any) => {
          console.log(error);
        });
  }

  updatePublished(status: any): void {
    const data = {
      name: this.activeBanker.name,
      dept: this.activeBanker.dept,
      post: this.activeBanker.post,
      salary: this.activeBanker.salary,
      published: this.activeBanker.published,
      id: this.activeBanker.id,
    
     // published: status
    };

    this.bnkService.update(this.activeBanker.id, data)
      .subscribe(
        (        response: any) => {
          this.activeBanker.published = status;
          console.log(response);
        },
        (        error: any) => {
          console.log(error);
        });
  }

  updateBanker(): void {
    this.bnkService.update(this.activeBanker.id, this.activeBanker)
      .subscribe(
        (        response: any) => {
          console.log(response);
          this.message = 'The banker was updated successfully!';
        },
        (        error: any) => {
          console.log(error);
        });
  }

  deleteBanker(): void {
    this.bnkService.delete(this.activeBanker.id)
      .subscribe(
        (        response: any) => {
          console.log(response);
          this.router.navigate(['/banks']);
        },
        (        error: any) => {
          console.log(error);
        });
  }
}
