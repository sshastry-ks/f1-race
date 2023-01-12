import { Action, createReducer, on } from "@ngrx/store";
import * as RaceResultsActions from './race-results.actions';
import { RequestState } from '@app/models';
import { RaceResultsState, initalRaceResultsState, adapter } from "./race-results.state";

const reducer = createReducer(
    initalRaceResultsState,

    on(RaceResultsActions.loadRaceResultsList, (State: RaceResultsState) => {
        return {
            ...State,
            requestState: RequestState.LOADING
        }
    }),

    on(RaceResultsActions.loadRaceResultsListSuccess, (State: RaceResultsState, {raceResults, totalItems}) => {
        return adapter.setAll(raceResults, {
            ...State, 
            totalItems,
            requestState: RequestState.RESOLVED
        })
    }),

    on(RaceResultsActions.loadRaceResultsListFailure, (State: RaceResultsState) => {
        return {
            ...State,
            requestState: RequestState.ERROR
        }
    }),

    on(
        RaceResultsActions.pageSizeChangedOrPageMoved,
        (state: RaceResultsState, {pageOptions}) => {
            return {
                ...state,
                limit: pageOptions.pageSize,
                offset: pageOptions.pageIndex
            };
        }
    )
)

export function raceResultsReducer(state: RaceResultsState | undefined, action: Action) {
    return reducer(state, action)
}