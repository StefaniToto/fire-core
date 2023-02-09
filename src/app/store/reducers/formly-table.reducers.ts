import { createReducer, on } from '@ngrx/store';
import { DataTableActions } from '../actions';

export interface DataTableState {
  dataTable: any[] | null;
  error: string;
}

const dataTableState: DataTableState = {
  dataTable: null,
  error: '',
};

export const dataReducer = createReducer<DataTableState>(
  dataTableState,
  on(DataTableActions.loadDataTableSuccess, (state, action): DataTableState => {
    return {
      ...state,
      dataTable: action.dataTable,
      error: '',
    };
  }),
  on(DataTableActions.loadDataTableFailure, (state, action): DataTableState => {
    return {
      ...state,
      dataTable: [],
      error: action.error,
    };
  })
);
