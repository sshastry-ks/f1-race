import { createAction, props } from "@ngrx/store";
import { DriverStanding } from "src/app/models";

export const enterRaceDriverStandingsList = createAction(
    '[Race driver-standings List Page] Enter race driver-standings list page'
);

export const loadRaceDriverStandingsList = createAction(
    '[Race driver-standings Effects] Load race driver-standings list'
);

export const pageSizeChanged = createAction(
    '[Race driver-standings List Page] Page size changed', props<{ newPageSize: number}>()
);

export const navigatePage = createAction(
    '[Race driver-standings List Page] navigate page', props<{ direction: number}>()
);

// API actions
export const loadRaceDriverStandingsListSuccess = createAction(
    '[Race driver-standings Effects] Load race driver-standings list success',
    props<{driverStandingsList: DriverStanding[], totalItems: number}>()
);

export const loadRaceDriverStandingsFailure = createAction(
    '[Race driver-standings Effects] Load race driver-standings list failure',
    props<{error: any}>()
);