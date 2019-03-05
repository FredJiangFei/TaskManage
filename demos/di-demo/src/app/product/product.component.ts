import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AppleService } from '../services/apple.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // providers: [{ provide: ProductService, useClass: AppleService }],
})
export class ProductComponent implements OnInit {

  product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
