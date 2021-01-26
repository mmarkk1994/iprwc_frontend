import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import {CartService} from '../../cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(public cartService: CartService) {}

  ngOnInit() {
    console.log(this.product.image);
  }
}
