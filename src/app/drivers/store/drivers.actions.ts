import { PageEvent } from "@angular/material/paginator";
import { createAction, props } from "@ngrx/store";
import { Driver } from "src/app/models";

export const enterDriverList = createAction('[Drivers List Page] Enter driver list page');

export const loadDriverList = createAction('[Drivers Effects] Load driver list');

export const pageSizeChangedOrPageMoved = createAction(
    '[Drivers List Page] Page size changed or moved',
    props<{ pageOptions: PageEvent}>()
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