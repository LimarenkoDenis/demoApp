import { products } from './data';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }


  addToCart(product) {
    this._snackBar.open(`${product.title} has been added to cart!`);
    console.log(product);

  }
}
