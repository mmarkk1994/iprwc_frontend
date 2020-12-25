import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  productSubscription: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchAllProducts();
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

  private fetchAllProducts() {
    this.productSubscription = this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

}
