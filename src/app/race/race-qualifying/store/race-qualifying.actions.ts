import { createAction, props } from "@ngrx/store";
import { RaceQualifying } from "src/app/models";

export const enterRaceQualifyingList = createAction(
    '[Race qualifying List Page] Enter race qualifying list page'
);

export const loadRaceQualifyingList = createAction(
    '[Race qualifying Effects] Load race qualifying list'
);

export const pageSizeChanged = createAction(
    '[Race qualifying List] Page size changed', props<{ newPageSize: number}>()
);

export const navigatePage = createAction(
    '[Race qualifying List] navigate page', props<{ direction: number}>()
);

// API actions
export const loadRaceQualifyingListSuccess = createAction(
    '[Race qualifying Effects] Load race qualifying list success',
    props<{raceQualifyingList: RaceQualifying[], totalItems: number}>()
);

export const loadRaceQualifyingFailure = createAction(
    '[Race qualifying Effects] Load race qualifying list failure',
    props<{error: any}>()
);