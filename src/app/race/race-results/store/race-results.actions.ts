import { createAction, props } from "@ngrx/store";
import { RaceResult } from "src/app/models";

export const enterRaceResultsList = createAction('[Race Results List Page] Enter race results list page');

export const loadRaceResultsList = createAction('[Race Results Effects] Load race results list');

export const pageSizeChanged = createAction(
    '[Race Results List page] Page size changed', props<{ newPageSize: number}>()
);

export const navigatePage = createAction(
    '[Race Results List page] navigate page', props<{ direction: number}>()
);

// API actions

export const loadRaceResultsListSuccess = createAction(
    '[Race Results Effects] Load race results list success',
    props<{raceResults: RaceResult[], totalItems: number}>()
);

export const loadRaceResultsListFailure = createAction(
    '[Race Results Effects] Load race results list failure',
    props<{error: any}>()
);