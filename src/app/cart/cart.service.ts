import {Product} from '../products/product.model';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
  export class CartService {
  products: Product[] = [];

  constructor(private route: Router) {

  }

  addProductToCart(product: Product) {
    if (localStorage.getItem('user') == null) {
      this.route.navigate(['/login']);
    } else {
      this.products.push(product);
      localStorage.setItem('cart', JSON.stringify(this.products));
      this.route.navigate(['/cart']);
    }
  }

  removeProductFromCart(product: Product) {
    this.products = this.products.filter(({ id }) => id !== id);
  }
}
