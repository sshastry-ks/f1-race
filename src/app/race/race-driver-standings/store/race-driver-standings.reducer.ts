import { Action, createReducer, on } from "@ngrx/store";
import * as RaceDriverStandingsListActions from './race-driver-standings.actions';
import { RequestState } from "src/app/models";
import { RaceDriverStandingsListState, initalRaceDriverStandingsListState, adapter } from "./race-driver-standings.state";

const reducer = createReducer(
    initalRaceDriverStandingsListState,

    on(RaceDriverStandingsListActions.loadRaceDriverStandingsList, (State: RaceDriverStandingsListState) => {
        return {
            ...State,
            requestState: RequestState.LOADING
        }
    }),

    on(RaceDriverStandingsListActions.loadRaceDriverStandingsListSuccess, (State: RaceDriverStandingsListState, {driverStandingsList, totalItems}) => {
        return adapter.setAll(driverStandingsList, {
            ...State, 
            totalItems,
            requestState: RequestState.RESOLVED
        })
    }),

    on(RaceDriverStandingsListActions.loadRaceDriverStandingsFailure, (State: RaceDriverStandingsListState) => {
        return {
            ...State,
            requestState: RequestState.ERROR
        }
    }),

    on(RaceDriverStandingsListActions.pageSizeChanged, (state: RaceDriverStandingsListState, {newPageSize}) => {
        return {
            ...state,
            limit: newPageSize,
            offset: initalRaceDriverStandingsListState.offset
        }
    }),

    on(RaceDriverStandingsListActions.navigatePage, (state: RaceDriverStandingsListState, {direction}) => {
        return {
            ...state,
            offset: state.offset + direction
        }
    })
)

export function RaceDriverStandingsListReducer(state: RaceDriverStandingsListState | undefined, action: Action) {
    return reducer(state, action)
}