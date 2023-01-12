import { PageEvent } from "@angular/material/paginator";
import { createAction, props } from "@ngrx/store";
import { DriverStanding } from '@race/models';

export const enterRaceDriverStandingsList = createAction(
    '[Race Driver-standings List Page] Enter race driver-standings list page'
);

export const loadRaceDriverStandingsList = createAction(
    '[Race Driver-standings List Effects] Load race driver-standings list'
);

export const pageSizeChangedOrPageMoved = createAction(
    '[Race Driver-standings List Page] Page size changed or moved',
    props<{ pageOptions: PageEvent}>()
);

// API actions
export const loadRaceDriverStandingsListSuccess = createAction(
    '[Race Driver-standings List Effects] Load race driver-standings list success',
    props<{driverStandingsList: DriverStanding[], totalItems: number}>()
);

export const loadRaceDriverStandingsFailure = createAction(
    '[Race Driver-standings List Effects] Load race driver-standings list failure',
    props<{error: any}>()
);