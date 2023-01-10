import { Action, createReducer, on } from "@ngrx/store";
import * as RaceResultActions from './race-results.actions';
import { RequestState } from "src/app/models";
import { RaceResultState, initalRaceResultState, adapter } from "./race-results.state";

const reducer = createReducer(
    initalRaceResultState,

    on(RaceResultActions.loadRaceResultList, (State: RaceResultState) => {
        return {
            ...State,
            requestState: RequestState.LOADING
        }
    }),

    on(RaceResultActions.loadRaceResultListSuccess, (State: RaceResultState, {raceResults, totalItems}) => {
        return adapter.setAll(raceResults, {
            ...State, 
            totalItems,
            requestState: RequestState.RESOLVED
        })
    }),

    on(RaceResultActions.loadRaceResultListFailure, (State: RaceResultState) => {
        return {
            ...State,
            requestState: RequestState.ERROR
        }
    }),

    on(RaceResultActions.pageSizeChanged, (state: RaceResultState, {newPageSize}) => {
        return {
            ...state,
            limit: newPageSize,
            offset: initalRaceResultState.offset
        }
    }),

    on(RaceResultActions.navigatePage, (state: RaceResultState, {direction}) => {
        return {
            ...state,
            offset: state.offset + direction
        }
    }),

    on(RaceResultActions.resetPaginationParams, (state: RaceResultState) => {
        return adapter.removeAll({
            ...state,
            limit: initalRaceResultState.limit,
            offset: initalRaceResultState.offset
        })
    })
)

export function RaceResultsReducer(state: RaceResultState | undefined, action: Action) {
    return reducer(state, action)
}