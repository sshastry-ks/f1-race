import { createAction, props } from "@ngrx/store";
import { Race } from "src/app/models";

export const enterRaceList = createAction('[Race List] Enter race list');

export const loadRaceList = createAction('[Race Effects] Load race list');

export const pageSizeChanged = createAction(
    '[Race List] Page size changed', props<{ newPageSize: number}>()
);

export const navigatePage = createAction(
    '[Race List] navigate page', props<{ direction: number}>()
);

export const resetPaginationParams = createAction('[Race Effects] Reset pagination parameters');

export const updateSelectedRace = createAction(
    '[Race List] Update selected race', props<{ selectedRaceId: string}>()
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