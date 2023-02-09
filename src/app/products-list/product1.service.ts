import { Injectable } from '@angular/core';
import { from, Observable, of, throwError } from 'rxjs';
import { Product } from './product.model';
import { catchError, first, map, switchMap, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Hero } from '../hero';

const collection_path = 'products';

@Injectable({
  providedIn: 'root',
})
export class ProductService1 {
  constructor(private http: HttpClient) {}
  private heroesUrl = 'api/heroes';

  getProducts1(): Observable<Product[]> {
    return this.http.get<any[]>(this.heroesUrl).pipe(
      tap((heroes) => console.log(`fetched heroes`)),
      catchError(this.handleError('getHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
