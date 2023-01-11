import { Action, createReducer, on } from "@ngrx/store";
import * as RaceResultActions from './race-results.actions';
import { RequestState } from "src/app/models";
import { RaceResultState, initalRaceResultState, adapter } from "./race-results.state";

const reducer = createReducer(
    initalRaceResultState,

    on(RaceResultActions.loadRaceResultsList, (State: RaceResultState) => {
        return {
            ...State,
            requestState: RequestState.LOADING
        }
    }),

    on(RaceResultActions.loadRaceResultsListSuccess, (State: RaceResultState, {raceResults, totalItems}) => {
        return adapter.setAll(raceResults, {
            ...State, 
            totalItems,
            requestState: RequestState.RESOLVED
        })
    }),

    on(RaceResultActions.loadRaceResultsListFailure, (State: RaceResultState) => {
        return {
            ...State,
            requestState: RequestState.ERROR
        }
    }),

    on(
        RaceResultActions.pageSizeChangedOrPageMoved,
        (state: RaceResultState, {pageOptions}) => {
            return adapter.removeAll({
                ...state,
                limit: pageOptions.pageSize,
                offset: pageOptions.pageIndex
            })
        }
    )
)

export function RaceResultsReducer(state: RaceResultState | undefined, action: Action) {
    return reducer(state, action)
}