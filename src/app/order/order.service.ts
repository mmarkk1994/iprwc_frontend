import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Order} from './order.model';

@Injectable ({
  providedIn: 'root'
})

export class OrderService {

  constructor(private apiService: ApiService) {}

  createOrder(order: Order[]) {
    return this.apiService.postJson('order/create', order);
  }

  getAllOrders() {
    return this.apiService.getRequest('order/all');
  }

  getUserOrders(id: number) {
    return this.apiService.getRequest('order/' + id);
  }
}
