import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { City } from '../model/city.model';
import { FakeHttpService, randomCity } from './fake-http.service';
interface Store {
  $cities: WritableSignal<City[]>;
}

@Injectable({
  providedIn: 'root',
})
export class CityStore {
  private readonly _http = inject(FakeHttpService);
  private readonly _state: Store = {
    $cities: signal<City[]>([]),
  };
  readonly $cities = this._state.$cities.asReadonly();

  $fetchCities = toSignal(
    this._http.fetchCities$.pipe(
      tap((cities: City[]) => this._state.$cities.set(cities)),
    ),
  );

  addOne() {
    this._state.$cities.update((c: City[]) => [...c, randomCity()]);
  }

  deleteOne(id: number) {
    this._state.$cities.set(
      this.$cities().filter((citie: City) => citie.id !== id),
    );
  }
}
