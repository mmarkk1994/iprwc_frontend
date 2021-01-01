import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Product} from '../../../products/product.model';
import {ProductService} from '../../../products/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;
  product: Product = new Product();

  constructor(private productService: ProductService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params
      .subscribe((param) => {
        this.getProduct(param.id);
      });
  }

  private getProduct(productId: number) {
    this.productService.getProduct(productId)
      .subscribe((product) => {
        this.product = product;
      });
  }

  editProduct() {
    this.productService.editProduct(this.product)
      .subscribe((response) => {
        console.log(response.message);
        this.route.navigate(['/admin/panel']);
      }, errors => {
        console.log(errors);
      });
  }

}
