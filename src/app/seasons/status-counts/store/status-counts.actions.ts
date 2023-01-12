import { createAction, props } from "@ngrx/store";
import { StatusCount } from "src/app/models";

export const enterSeasonDetails = createAction(
    '[Status Counts Page] Enter status counts page'
)

export const loadStatusCounts = createAction(
    '[Status Counts Effects] Load Status counts',
    props<{ season: string }>()
);


//API actions
export const loadCarStatusCountsSuccess = createAction(
    '[Status Counts Effects] Load status counts success',
    props<{ statusCounts: StatusCount[] }>()
);

export const loadCarStatusCountsFailure = createAction(
    '[Status Counts Effects] Load status counts failure',
    props<{ error: any }>()
);