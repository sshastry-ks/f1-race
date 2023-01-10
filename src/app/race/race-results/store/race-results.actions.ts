import { createAction, props } from "@ngrx/store";
import { RaceResult } from "src/app/models";

export const enterRaceResultList = createAction('[Race Result List] Enter race result list');

export const loadRaceResultList = createAction('[Race Result Effects] Load race result list');

export const pageSizeChanged = createAction(
    '[Race Result List] Page size changed', props<{ newPageSize: number}>()
);

export const navigatePage = createAction(
    '[Race Result List] navigate page', props<{ direction: number}>()
);

export const resetPaginationParams = createAction('[Race Result Effects] Reset pagination parameters');


// API actions

export const loadRaceResultListSuccess = createAction(
    '[Race Result Effects] Load race result list success',
    props<{raceResults: RaceResult[], totalItems: number}>()
);

export const loadRaceResultListFailure = createAction(
    '[Race Result Effects] Load race result list failure',
    props<{error: any}>()
);