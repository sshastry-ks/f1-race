import { Action, createReducer, on } from "@ngrx/store";
import * as RaceQualifyingActions from './race-qualifying.actions';
import { RequestState } from "src/app/models";
import { RaceQualifyingListState, initalRaceQualifyingListState, adapter } from "./race-qualifying.state";

const reducer = createReducer(
    initalRaceQualifyingListState,

    on(RaceQualifyingActions.loadRaceQualifyingList, (State: RaceQualifyingListState) => {
        return {
            ...State,
            requestState: RequestState.LOADING
        }
    }),

    on(RaceQualifyingActions.loadRaceQualifyingListSuccess, (State: RaceQualifyingListState, {raceQualifyingList, totalItems}) => {
        return adapter.setAll(raceQualifyingList, {
            ...State, 
            totalItems,
            requestState: RequestState.RESOLVED
        })
    }),

    on(RaceQualifyingActions.loadRaceQualifyingFailure, (State: RaceQualifyingListState) => {
        return {
            ...State,
            requestState: RequestState.ERROR
        }
    }),

    on(RaceQualifyingActions.pageSizeChanged, (state: RaceQualifyingListState, {newPageSize}) => {
        return {
            ...state,
            limit: newPageSize,
            offset: initalRaceQualifyingListState.offset
        }
    }),

    on(RaceQualifyingActions.navigatePage, (state: RaceQualifyingListState, {direction}) => {
        return {
            ...state,
            offset: state.offset + direction
        }
    })
)

export function RaceQualifyingListReducer(state: RaceQualifyingListState | undefined, action: Action) {
    return reducer(state, action)
}