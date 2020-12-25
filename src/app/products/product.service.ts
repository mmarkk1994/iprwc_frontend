import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Product} from './product.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) {}

  getProducts() {
    const productSubject = new Subject<Product[]>();
    this.api.getRequest('product/all')
      .subscribe(response => {
        const product = response.content as Product[];
        productSubject.next(product);
        productSubject.complete();
      }, error => {
        console.log(error);
      });
    return productSubject;
  }

}
