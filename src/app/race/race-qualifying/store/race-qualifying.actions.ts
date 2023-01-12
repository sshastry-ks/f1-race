import { PageEvent } from "@angular/material/paginator";
import { createAction, props } from "@ngrx/store";
import { RaceQualifying } from '@race/models';

export const enterRaceQualifyingList = createAction(
    '[Race Qualifying List Page] Enter race qualifying list page'
);

export const loadRaceQualifyingList = createAction(
    '[Race Qualifying List Effects] Load race qualifying list'
);

export const pageSizeChangedOrPageMoved = createAction(
    '[Race Qualifying List] Page size changed or moved',
    props<{ pageOptions: PageEvent}>()
);

// API actions
export const loadRaceQualifyingListSuccess = createAction(
    '[Race Qualifying List Effects] Load race qualifying list success',
    props<{raceQualifyingList: RaceQualifying[], totalItems: number}>()
);

export const loadRaceQualifyingListFailure = createAction(
    '[Race Qualifying List Effects] Load race qualifying list failure',
);