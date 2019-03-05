import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class AppleService {

  constructor() { }

  getProduct(): Product {
    return new Product('iphone7', 5000);
  }
}
