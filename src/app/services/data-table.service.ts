import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { scan, shareReplay } from 'rxjs/operators';
import { merge, Observable, of, Subject } from 'rxjs';
import { Product } from '../models/product';

import { concatMap } from 'rxjs/operators';
import { Action } from '../models/edit-action';
@Injectable({
  providedIn: 'root',
})
export class DataTableService {
  constructor(private productService: ProductsService) {}

  tableDataAll$ = this.productService.getProducts();

  // Action Stream for adding/updating/deleting products
  private productModifiedSubject = new Subject<Action<Product>>();
  productModifiedAction$ = this.productModifiedSubject.asObservable();

  productsWithCRUD$ = merge(
    this.tableDataAll$,
    this.productModifiedAction$.pipe(
      concatMap((operation) => this.saveProductAPI(operation))
    )
  ).pipe(
    scan(
      (acc, value) =>
        value instanceof Array ? [...value] : this.modifyProducts(acc, value),
      [] as Product[]
    ),
    shareReplay(1)
  );

  saveProductAPI(operation: Action<Product>): Observable<Action<Product>> {
    const product = operation.item;
    console.log('call api for this change', JSON.stringify(operation.item));
    if (operation.action === 'add') {
      return of(operation);
    } else return of(operation);
  }

  // Modify the array of products
  modifyProducts(products: Product[], operation: Action<Product>): Product[] {
    if (operation.action === 'add') {
      return [...products, operation.item];
    } else if (operation.action === 'update') {
      console.log('after modify', operation.item);
      return products.map((product) =>
        product.id === operation.item.id ? operation.item : product
      );
    } else if (operation.action === 'delete') {
      return products.filter((product) => product.id !== operation.item.id);
    }
    return [...products];
  }

  addProduct(newProduct?: Product): void {
    newProduct = newProduct || this.fakeProduct();
    this.productModifiedSubject.next({
      item: newProduct,
      action: 'add',
    });
  }

  deleteProduct(selectedProduct: Product): void {
    this.productModifiedSubject.next({
      item: selectedProduct,
      action: 'delete',
    });
  }

  private fakeProduct(): Product {
    return {
      id: 42,
      productName: 'Another One',
      productCode: 'TBX-0042',
      description: 'Our new product',
      price: 8.9,
      categoryId: 3,
      category: 'Toolbox',
      quantityInStock: 30,
    };
  }
}
