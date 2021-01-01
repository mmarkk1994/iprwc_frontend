import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Product} from '../../../products/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  @ViewChild('form', {static: true}) form: NgForm;
  product: Product = new Product();

  constructor() { }

  ngOnInit() {}

  editProduct() {}

}
