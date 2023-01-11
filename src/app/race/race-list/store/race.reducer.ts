import { Action, createReducer, on } from "@ngrx/store";
import { adapter, initalRaceListState, RaceListState } from "./race.state";
import * as RaceActions from './race.actions';
import { RequestState } from "src/app/models";

const reducer = createReducer(
    initalRaceListState,

    on(RaceActions.loadRaceList, (State: RaceListState) => {
        return {
            ...State,
            requestState: RequestState.LOADING
        }
    }),

    on(RaceActions.loadRaceListSuccess, (State: RaceListState, {races, totalItems}) => {
        return adapter.setAll(races, {
            ...State, 
            totalItems,
            requestState: RequestState.RESOLVED
        })
    }),

    on(RaceActions.loadRaceListFailure, (State: RaceListState) => {
        return {
            ...State,
            requestState: RequestState.ERROR
        }
    }),

    on(
        RaceActions.pageSizeChangedOrPageMoved,
        (state: RaceListState, {pageOptions}) => {
            return adapter.removeAll({
                ...state,
                limit: pageOptions.pageSize,
                offset: pageOptions.pageIndex
            })
        }
    )
)

export function RaceListReducer(state: RaceListState | undefined, action: Action) {
    return reducer(state, action)
}