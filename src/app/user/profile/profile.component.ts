import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../order/order.service';
import {UserService} from '../user.service';
import {User} from '../user.model';
import {OrderItems} from '../../order/order-items.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  orders: OrderItems[];
  currentUser: User;
  constructor(private orderService: OrderService, private userService: UserService) { }

  ngOnInit() {
    this.orderService.getUserOrders(this.userService.currentUser.id)
      .subscribe((orders) => {
        this.orders = orders.content;
      });

    this.currentUser = this.userService.currentUser;
  }

}
