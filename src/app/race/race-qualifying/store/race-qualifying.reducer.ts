import { Action, createReducer, on } from "@ngrx/store";
import * as RaceQualifyingActions from './race-qualifying.actions';
import { RequestState } from '@app/models';
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

    on(RaceQualifyingActions.loadRaceQualifyingListFailure, (State: RaceQualifyingListState) => {
        return {
            ...State,
            requestState: RequestState.ERROR
        }
    }),

    on(
        RaceQualifyingActions.pageSizeChangedOrPageMoved,
        (state: RaceQualifyingListState, {pageOptions}) => {
            return {
                ...state,
                limit: pageOptions.pageSize,
                offset: pageOptions.pageIndex
            };
        }
    )
)

export function RaceQualifyingListReducer(state: RaceQualifyingListState | undefined, action: Action) {
    return reducer(state, action)
}