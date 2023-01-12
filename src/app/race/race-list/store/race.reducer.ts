import { Action, createReducer, on } from "@ngrx/store";
import { adapter, initalRaceListState, RaceListState } from "./race.state";
import * as RaceListActions from './race.actions';
import { RequestState } from "src/app/models";

const reducer = createReducer(
    initalRaceListState,

    on(RaceListActions.loadRaceList, (State: RaceListState) => {
        return {
            ...State,
            requestState: RequestState.LOADING
        }
    }),

    on(RaceListActions.loadRaceListSuccess, (State: RaceListState, {races, totalItems}) => {
        return adapter.setAll(races, {
            ...State, 
            totalItems,
            requestState: RequestState.RESOLVED
        })
    }),

    on(RaceListActions.loadRaceListFailure, (State: RaceListState) => {
        return {
            ...State,
            requestState: RequestState.ERROR
        }
    }),

    on(
        RaceListActions.pageSizeChangedOrPageMoved,
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