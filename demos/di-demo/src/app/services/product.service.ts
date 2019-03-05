import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  constructor() { }

  getProduct(): Product {
    return new Product('vivo r11', 2000);
  }
}
