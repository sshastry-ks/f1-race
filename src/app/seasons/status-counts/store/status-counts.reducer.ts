import { Action, createReducer, on } from "@ngrx/store";
import { initialStatusCounts, StatusCountsState } from "./status-counts.state";
import * as StatusCountsActions from './status-counts.actions';
import { RequestState } from "src/app/models";

const reducer = createReducer(
    initialStatusCounts,

    on(StatusCountsActions.loadStatusCounts, (state: StatusCountsState) => {
        return {
            ...state,
            requestState: RequestState.LOADING
        }
    }),

    on(StatusCountsActions.loadStatusCountsSuccess, (state: StatusCountsState, {statusCounts}) => {
        return {
            ...state,
            statusCounts,
            requestState: RequestState.RESOLVED
        }
    }),

    on(StatusCountsActions.loadStatusCountsFailure, (state: StatusCountsState) => {
        return {
            ...state,
            requestState: RequestState.ERROR
        }
    }),
);

export function statusCountsReducer(state: StatusCountsState | undefined, action: Action) {
    return reducer(state, action);
}