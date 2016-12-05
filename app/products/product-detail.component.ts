import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-product-detail',
    templateUrl: 'app/products/product-detail.component.html'
      //templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Details';
    product: IProduct;
}