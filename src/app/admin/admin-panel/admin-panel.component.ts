import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../products/product.service';
import {Product} from '../../products/product.model';
import {Subscription} from 'rxjs';
import {EditProductComponent} from './edit-product/edit-product.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  productSubscription: Subscription;

  constructor(private productService: ProductService, private editProductComponent: EditProductComponent, private route: Router) { }

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

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product.id)
      .subscribe((response) => {
        console.log(response.message);
        this.products = [];
        this.fetchAllProducts();
      }, errors => {
        console.log(errors);
      });
  }
}
