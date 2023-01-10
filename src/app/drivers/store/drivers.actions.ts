import { createAction, props } from "@ngrx/store";
import { Driver } from "src/app/models";

export const enterDriverList = createAction('[Drivers List] Enter drivers list');

export const loadDriversList = createAction('[Drivers Effects] Load drivers list');

export const pageSizeChanged = createAction(
    '[Drivers List] Page size changed', props<{ newPageSize: number}>()
);

export const navigatePage = createAction(
    '[Drivers List] navigate page', props<{ direction: number}>()
);

export const resetPaginationParams = createAction('[Drivers Effects] Reset pagination parameters');


// API actions

export const loadDriversListSuccess = createAction(
    '[Drivers List API] Load drivers list success',
    props<{ drivers: Driver[], totalItems: number }>()
);

export const loadDriversListFailure = createAction(
    '[Drivers List API] Load drivers list failure',
    props<{ error: any }>()
);