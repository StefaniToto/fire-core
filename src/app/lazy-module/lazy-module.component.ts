import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { dataTableFeatureState } from '../store/selectors/formly-table.selectors';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-lazy-module',
  templateUrl: './lazy-module.component.html',
  styleUrls: ['./lazy-module.component.scss'],
})
export class LazyModuleComponent implements OnInit {
  title = 'Some componenttttttttttttttt';
  productCategories$: Observable<{ dataTable: any[] }> = this.store
    .select(dataTableFeatureState)
    .pipe(
      tap((x) => {
        console.log('data', x);
      })
    );
  constructor(private store: Store<any>) {}

  ngOnInit(): void {}
}
