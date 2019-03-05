import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public queryId: number;
  public products: Product[];

  constructor(private activedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.queryId = this.activedRouter.snapshot.queryParams['id'];
    
    this.products = [
      new Product(1, 'Car'),
      new Product(2, 'Computer')
    ]
  }
}
