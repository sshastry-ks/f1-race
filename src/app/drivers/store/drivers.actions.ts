import { createAction, props } from "@ngrx/store";
import { Driver } from "src/app/models";

export const enterDriverList = createAction('[Drivers List] Enter driver list');

export const loadDriverList = createAction('[Drivers Effects] Load driver list');

export const pageSizeChanged = createAction(
    '[Driver List] Page size changed', props<{ newPageSize: number}>()
);

export const navigatePage = createAction(
    '[Driver List] navigate page', props<{ direction: number}>()
);

export const resetPaginationParams = createAction('[Driver Effects] Reset pagination parameters');


// API actions

export const loadDriverListSuccess = createAction(
    '[Driver List API] Load drivers list success',
    props<{ drivers: Driver[], totalItems: number }>()
);

export const loadDriverListFailure = createAction(
    '[Driver List API] Load drivers list failure',
    props<{ error: any }>()
);