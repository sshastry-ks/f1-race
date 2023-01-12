import { Action, createReducer, on, State } from "@ngrx/store";
import { adapter, DriversListState, initalDriversListState } from "./drivers.state";
import * as DriverAtcions from './drivers.actions';
import { RequestState } from "src/app/models";

const reducer = createReducer(
    initalDriversListState,

    on(DriverAtcions.loadDriversList, (State: DriversListState) => {
        return {
            ...State,
            requestState: RequestState.LOADING
        }
    }),

    on(DriverAtcions.loadDriversListSuccess, (State: DriversListState, {drivers, totalItems}) => {
        return adapter.setAll(drivers, {
            ...State, 
            totalItems,
            requestState: RequestState.RESOLVED
        })
    }),

    on(DriverAtcions.loadDriversListFailure, (State: DriversListState) => {
        return {
            ...State,
            requestState: RequestState.ERROR
        }
    }),

    on(
        DriverAtcions.pageSizeChangedOrPageMoved,
        (state: DriversListState, {pageOptions}) => {
            return adapter.removeAll({
                ...state,
                limit: pageOptions.pageSize,
                offset: pageOptions.pageIndex
            })
        }
    ),

    on(DriverAtcions.resetPaginationParams, (state: DriversListState) => {
        return adapter.removeAll({
            ...state,
            limit: initalDriversListState.limit,
            offset: initalDriversListState.offset
        })
    })

);

export function DriversListReducer(state: DriversListState | undefined, action: Action) {
    return reducer(state, action)
}