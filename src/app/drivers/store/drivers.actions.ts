import { PageEvent } from "@angular/material/paginator";
import { createAction, props } from "@ngrx/store";
import { Driver } from "@drivers/models";

export const enterDriversList = createAction('[Drivers List Page] Enter driver list page');

export const loadDriversList = createAction('[Drivers List Effects] Load driver list');

export const pageSizeChangedOrPageMoved = createAction(
    '[Drivers List Page] Page size changed or moved',
    props<{ pageOptions: PageEvent}>()
);

export const resetPaginationParams = createAction('[Drivers List Effects] Reset pagination parameters');


// API actions

export const loadDriversListSuccess = createAction(
    '[Driver List Effects] Load drivers list success',
    props<{ drivers: Driver[], totalItems: number }>()
);

export const loadDriversListFailure = createAction(
    '[Driver List Effects] Load drivers list failure',
    props<{ error: any }>()
);