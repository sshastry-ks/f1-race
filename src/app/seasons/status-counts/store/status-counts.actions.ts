import { createAction, props } from "@ngrx/store";
import { StatusCount } from "@seasons/status-counts/models";

export const enterStatusCounts = createAction(
    '[Status Counts Page] Enter status counts page'
)

export const loadStatusCounts = createAction(
    '[Status Counts Effects] Load Status counts',
    props<{ season: string }>()
);


//API actions
export const loadStatusCountsSuccess = createAction(
    '[Status Counts Effects] Load status counts success',
    props<{ statusCounts: StatusCount[] }>()
);

export const loadStatusCountsFailure = createAction(
    '[Status Counts Effects] Load status counts failure'
);