import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { ProductService1 } from './product1.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products$: Observable<Product[]> = this.ps
    .getProducts()
    .pipe(tap((x) => console.log(x, 'saaaa')));
  products1$: Observable<Product[]> = this.ps1.getProducts1();

  combineRes$: Observable<any> = combineLatest([
    this.products$,
    this.products1$,
  ]).pipe(
    map((x) => {
      return {
        d1: x[0],
        d2: x[1],
      };
    }),
    tap((x) => console.log(x, 'data, combined'))
  );

  constructor(private ps: ProductService, private ps1: ProductService1) {}
}
