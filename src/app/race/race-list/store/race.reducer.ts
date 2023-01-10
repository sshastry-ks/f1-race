import { Action, createReducer, on } from "@ngrx/store";
import { adapter, initalRaceState, RaceState } from "./race.state";
import * as RaceActions from './race.actions';
import { RequestState } from "src/app/models";

const reducer = createReducer(
    initalRaceState,

    on(RaceActions.loadRaceList, (State: RaceState) => {
        return {
            ...State,
            requestState: RequestState.LOADING
        }
    }),

    on(RaceActions.loadRaceListSuccess, (State: RaceState, {races, totalItems}) => {
        return adapter.setAll(races, {
            ...State, 
            totalItems,
            requestState: RequestState.RESOLVED
        })
    }),

    on(RaceActions.loadRaceListFailure, (State: RaceState) => {
        return {
            ...State,
            requestState: RequestState.ERROR
        }
    }),

    on(RaceActions.pageSizeChanged, (state: RaceState, {newPageSize}) => {
        return {
            ...state,
            limit: newPageSize
        }
    }),

    on(RaceActions.navigatePage, (state: RaceState, {direction}) => {
        return {
            ...state,
            offset: state.offset + direction
        }
    }),

    on(RaceActions.resetPaginationParams, (state: RaceState) => {
        return adapter.removeAll({
            ...state,
            limit: initalRaceState.limit,
            offset: initalRaceState.offset
        })
    })
)

export function RaceReducer(state: RaceState | undefined, action: Action) {
    return reducer(state, action)
}