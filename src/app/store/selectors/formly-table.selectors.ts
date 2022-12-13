import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataTableState } from '../reducers/formly-table.reducers';

const DataTableMainState =
  createFeatureSelector<DataTableState>('tableReducer');
export const dataTableFeatureState = createSelector(
  DataTableMainState,
  (state) => {
    if (state.dataTable) {
      return {
        dataTable: state.dataTable,
      };
    } else return null;
  }
);
