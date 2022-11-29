import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  products: Observable<Product[]> = this.ps.getProducts();

  constructor(private ps: ProductService) {}
}
