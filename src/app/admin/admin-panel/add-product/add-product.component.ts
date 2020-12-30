import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductService} from '../../../products/product.service';
import {Product} from '../../../products/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;
  product: Product = new Product();

  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.productService.addProduct(this.product)
      .subscribe((response) => {
        this.route.navigate(['/admin/panel']);

      }, errors => {
        console.log(errors);
      });
  }

}
