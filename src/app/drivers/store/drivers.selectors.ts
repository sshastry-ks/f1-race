import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from "src/app/models";
import { adapter, DriverState } from "./drivers.state";

const selectDriverListFeature = createFeatureSelector<DriverState>('driverList');

const {
    selectAll
} = adapter.getSelectors();

export const SelectIsLoadingDriverList = createSelector(
    selectDriverListFeature, (state: DriverState) => state.requestState === RequestState.LOADING
);

export const selectAllDrivers = createSelector(selectDriverListFeature, selectAll);

export const selectTotalDrivers = createSelector(
    selectDriverListFeature,
    (state: DriverState) => state.totalItems
);

export const selectCurrentPageSize = createSelector(
    selectDriverListFeature,
    (state: DriverState) => state.limit
);

export const selectCurrentPage = createSelector(
    selectDriverListFeature,
    (state: DriverState) => state.offset
);

export const selectTotalPages = createSelector(
    selectTotalDrivers,
    selectCurrentPageSize,
    (total, pageSize) => Math.ceil(total / pageSize)
);

export const selectPageSizeOptions = createSelector(
    selectDriverListFeature,
    (state: DriverState) => state.pageSizeOptions
);

export const selectDriverListQueryParams = createSelector(selectCurrentPage, selectCurrentPageSize, (page, limit) => {
    return {
        offset: page * limit,
        limit
    }
})
