import {Component, OnInit} from '@angular/core';
import {CartService} from './cart.service';
import {Order} from '../order/order.model';
import {User} from '../user/user.model';
import {OrderService} from '../order/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(private cartService: CartService, private orderService: OrderService) {
    if (localStorage.getItem('cart') != null) {
      this.cartService.products = JSON.parse(localStorage.getItem('cart'));
    } else {
      this.cartService.products = [];
    }
  }

  ngOnInit() {}

  Checkout() {
    const products = this.cartService.products;
    const orderItems: Order[] = [];

    const user = JSON.parse(localStorage.getItem('user')) as User;
    for (const product of products) {
      orderItems.push(
        new Order(product.id, user.id)
      );
    }

    this.orderService.createOrder(orderItems)
      .subscribe((response) => {
        this.cartService.clearCart();
      }, errors => {
        console.log(errors.error.message);
      });
  }

}
