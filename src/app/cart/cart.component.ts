import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(private cartService: CartService) {
    if (localStorage.getItem('cart') != null) {
      this.cartService.products = JSON.parse(localStorage.getItem('cart'));
    } else {
      this.cartService.products = [];
    }
  }

  ngOnInit() {
  }

}
