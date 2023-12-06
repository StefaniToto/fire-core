import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  combineLatestWith,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  interval,
  map,
  merge,
  Observable,
  of,
  pluck,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { CommonModule } from '@angular/common';
import { ajax } from 'rxjs/internal/ajax/ajax';
export enum DialogState {
  success = 'success',
  failure = 'failure',
  warning = 'warning',
}

@Component({
  selector: 'code-from-root-rxjs-tutorial',
  templateUrl: './rxjs-tutorial.component.html',
  styleUrls: ['./rxjs-tutorial.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class RxjsTutorialComponent implements OnInit {
  // timer$ = interval(1000).subscribe(console.log);
  // interval$ = timer(2000, 1000).subscribe(console.log);

  //transfer streams
  // keyup$ = fromEvent(document, 'keyup').pipe(
  //   map((event: any) => event['code']),
  //   tap(console.log)
  // );
  //
  // keyCode$ = of(1, 2, 3, 4, 5)
  //   .pipe(map((val) => val * 10))
  //   .subscribe(console.log);
  API = 'https://api.openbrewerydb.org/breweries';
  inputBox = document.getElementById('search') as HTMLElement;
  input$ = fromEvent(this.inputBox, 'keyup');
  dataObs$ = ajax.getJSON(`${this.API}?by_name=test`).pipe(tap(console.log));
  private emptyProduct: any = '';
  activeLayou: typeof DialogState = DialogState;
  active = DialogState.success;
  // Action Stream for adding/updating/deleting products
  private productModifiedSubject = new BehaviorSubject<any>({
    item: this.emptyProduct,
    action: 'none',
  });
  productModifiedAction$ = this.productModifiedSubject.asObservable();
  private productsSubject = new BehaviorSubject<any[]>([]);
  products$ = this.productsSubject.asObservable();

  productsWithCRUD$ = merge(
    this.dataObs$,
    this.productModifiedAction$.pipe(
      concatMap((operation) => this.saveProduct(operation)),
      concatMap(() => this.getProducts())
    )
  );

  saveProduct(operation: any): Observable<any> {
    const product = operation.item;
    console.log('saveProduct', JSON.stringify(operation.item));

    // If there is no operation, return the product
    return of(operation);
  }

  getProducts(): Observable<any[]> {
    return of();
    // return this.http.get<any[]>(this.productsUrl)
    //   .pipe(
    //     combineLatestWith(this.productCategoryService.productCategories$),
    //     map(([products, categories]) =>
    //       products.map(product => ({
    //         ...product,
    //         price: product.price ? product.price * 1.5 : 0,
    //         category: categories.find(c => product.categoryId === c.id)?.name,
    //         searchKey: [product.productName]
    //       } as Product))
    //     ),
    //     // Emit the data into the stream
    //     tap(productsWithCategories => this.productsSubject.next(productsWithCategories)),
    //     tap(data => console.log('Products: ', JSON.stringify(data))),
    //     catchError((e) => return of(e))
    //   )
  }

  constructor() {
    // this.activeLayou = DialogState;
  }
  ngOnInit() {
    // this.input$
    //   .pipe(
    //     debounceTime(200),
    //     pluck('target', 'value'),
    //     distinctUntilChanged(),
    //     switchMap((searchTerm) => {
    //       console.log(searchTerm);
    //       if (String(searchTerm).length >= 3)
    //         return ajax.getJSON(`${this.API}?by_name=test`);
    //       else return of(searchTerm);
    //     })
    //   )
    //   .subscribe((res) => console.log(res));

    // this.input$.pipe(debounceTime(1000)).subscribe(console.log);

    this.source$
      .pipe(switchMap(this.promiseDelay))
      .subscribe((c) => console.log(c));
  }

  click$ = fromEvent(document, 'click');

  // debounce time operator

  source$ = interval(1000).pipe(
    take(10),
    map((x) => x * 100)
  );

  promiseDelay(ms: number): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => resolve('done'), ms);
    });
  }
}
