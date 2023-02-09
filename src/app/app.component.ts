import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataTableActions } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fire-core';
  constructor(private store: Store<any>) {
    console.log('fired dispatch');
    this.store.dispatch(DataTableActions.loadDataTable());
  }
}
