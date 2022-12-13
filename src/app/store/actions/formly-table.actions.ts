import { createAction, props } from '@ngrx/store';

export const loadDataTable = createAction('[Data table] Load');

export const loadDataTableSuccess = createAction(
  '[Data table] Load Success',
  props<{ dataTable: any[] }>()
);

export const loadDataTableFailure = createAction(
  '[Data table] Load Fail',
  props<{ error: string }>()
);
