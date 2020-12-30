import {Injectable} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Product} from './product.model';
import {Subject} from 'rxjs';
import {HttpParams} from '@angular/common/http';

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

  addProduct(product: Product) {
    const params = new HttpParams()
      .set('album', product.album)
      .set('description', product.description)
      .set('image', product.imageUrl)
      .set('price', product.price.toString());
    return this.api.postRequest('product/add', params);
  }

}
