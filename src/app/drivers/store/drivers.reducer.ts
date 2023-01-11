import { Action, createReducer, on, State } from "@ngrx/store";
import { adapter, DriverState, initalDriverState } from "./drivers.state";
import * as DriverAtcions from './drivers.actions';
import { RequestState } from "src/app/models";

const reducer = createReducer(
    initalDriverState,

    on(DriverAtcions.loadDriverList, (State: DriverState) => {
        return {
            ...State,
            requestState: RequestState.LOADING
        }
    }),

    on(DriverAtcions.loadDriverListSuccess, (State: DriverState, {drivers, totalItems}) => {
        return adapter.setAll(drivers, {
            ...State, 
            totalItems,
            requestState: RequestState.RESOLVED
        })
    }),

    on(DriverAtcions.loadDriverListFailure, (State: DriverState) => {
        return {
            ...State,
            requestState: RequestState.ERROR
        }
    }),

    on(
        DriverAtcions.pageSizeChangedOrPageMoved,
        (state: DriverState, {pageOptions}) => {
            return adapter.removeAll({
                ...state,
                limit: pageOptions.pageSize,
                offset: pageOptions.pageIndex
            })
        }
    ),

    on(DriverAtcions.resetPaginationParams, (state: DriverState) => {
        return adapter.removeAll({
            ...state,
            limit: initalDriverState.limit,
            offset: initalDriverState.offset
        })
    })

);

export function DriverReducer(state: DriverState | undefined, action: Action) {
    return reducer(state, action)
}