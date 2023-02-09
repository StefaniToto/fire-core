import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, shareReplay, tap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import { DataTableActions } from '../actions';

@Injectable()
export class Dataffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  loadLanguageData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DataTableActions.loadDataTable),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((dataTable) =>
            DataTableActions.loadDataTableSuccess({ dataTable })
          ),
          catchError((error) =>
            of(DataTableActions.loadDataTableFailure({ error }))
          ),
          shareReplay(1)
        )
      )
    );
  });
}
