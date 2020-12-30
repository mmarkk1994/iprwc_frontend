import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../products/product.service';
import {Product} from '../../products/product.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  productSubscription: Subscription;

  constructor(private productService: ProductService) { }

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
