import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from "src/app/models";
import { adapter, DriverState } from "./drivers.state";


const selectDriverFeature = createFeatureSelector<DriverState>('drivers');

const {
    selectAll
} = adapter.getSelectors();

export const SelectIsLoadingDriverList = createSelector(
    selectDriverFeature, (state: DriverState) => state.requestState === RequestState.LOADING
);

export const selectAllDrivers = createSelector(selectDriverFeature, selectAll);

export const selectTotalDrivers = createSelector(
    selectDriverFeature,
    (state: DriverState) => state.totalItems
);

export const selectCurrentPageSize = createSelector(
    selectDriverFeature,
    (state: DriverState) => state.limit
);

export const selectCurrnetPage = createSelector(
    selectDriverFeature,
    (state: DriverState) => state.offset
);

export const selectTotalPages = createSelector(
    selectTotalDrivers,
    selectCurrentPageSize,
    (total, pageSize) => Math.ceil(total / pageSize)
);

export const selectPageSizeOptions = createSelector(
    selectDriverFeature,
    (state: DriverState) => state.pageSizeOptions
);

export const selectDriverQueryParams = createSelector(selectCurrnetPage, selectCurrentPageSize, (offset, limit) => {
    return {
        offset,
        limit
    }
})
