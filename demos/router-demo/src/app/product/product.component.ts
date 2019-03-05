import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../products/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // public snapshotId: number;
  public productId: number;
  public productName: string;

  constructor(private activedRouter: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    // this.snapshotId = this.activedRouter.snapshot.params['id'];
    this.activedRouter.params.subscribe((param: Params) => this.productId = Number.parseInt(param['id']));

    this.activedRouter.data.subscribe((data: {product:Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }

  goPre() {
    this.router.navigate(['/products', this.productId - 1]);
    return false;
  }

  goNext() {
    this.router.navigate(['/products', this.productId + 1]);
    return false;
  }
}
