import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-name',
  templateUrl: './product-name.component.html',
  styleUrls: ['./product-name.component.css']
})
export class ProductNameComponent implements OnInit {
  name: string;

  constructor(private activedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.activedRouter.snapshot.params['name'];
  }

}
