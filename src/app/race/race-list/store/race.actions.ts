import { PageEvent } from "@angular/material/paginator";
import { createAction, props } from "@ngrx/store";
import { Race } from "src/app/models";

export const enterRaceList = createAction('[Race List Page] Enter race list page');

export const loadRaceList = createAction('[Race Effects] Load race list');

export const pageSizeChangedOrPageMoved = createAction(
    '[Race List Page] Page size changed or moved',
    props<{ pageOptions: PageEvent}>()
);


// API actions
export const loadRaceListSuccess = createAction(
    '[Race Effects] Load race list success',
    props<{races: Race[], totalItems: number}>()
);

export const loadRaceListFailure = createAction(
    '[Race Effects] Load race list failure',
    props<{error: any}>()
);