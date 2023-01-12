import { PageEvent } from "@angular/material/paginator";
import { createAction, props } from "@ngrx/store";
import { RaceResult } from '@race/models';

export const enterRaceResultsList = createAction('[Race Results List Page] Enter race results list page');

export const loadRaceResultsList = createAction('[Race Results Effects] Load race results list');

export const pageSizeChangedOrPageMoved = createAction(
    '[Race Results List page] Page size changed or moved',
    props<{ pageOptions: PageEvent}>()
);


// API actions

export const loadRaceResultsListSuccess = createAction(
    '[Race Results Effects] Load race results list success',
    props<{raceResults: RaceResult[], totalItems: number}>()
);

export const loadRaceResultsListFailure = createAction(
    '[Race Results Effects] Load race results list failure'
);