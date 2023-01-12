import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from "src/app/models";
import { adapter, DriversListState } from "./drivers.state";

const selectDriversListFeature = createFeatureSelector<DriversListState>('driversList');

const {
    selectAll
} = adapter.getSelectors();

export const SelectIsLoadingDriverList = createSelector(
    selectDriversListFeature, (state: DriversListState) => state.requestState === RequestState.LOADING
);

export const selectAllDrivers = createSelector(selectDriversListFeature, selectAll);

export const selectTotalDrivers = createSelector(
    selectDriversListFeature,
    (state: DriversListState) => state.totalItems
);

export const selectCurrentPageSize = createSelector(
    selectDriversListFeature,
    (state: DriversListState) => state.limit
);

export const selectCurrentPage = createSelector(
    selectDriversListFeature,
    (state: DriversListState) => state.offset
);

export const selectPageSizeOptions = createSelector(
    selectDriversListFeature,
    (state: DriversListState) => state.pageSizeOptions
);

export const selectDriverListQueryParams = createSelector(
    selectCurrentPage, selectCurrentPageSize, (page, limit) => {
    return {
        offset: page * limit,
        limit
    }
})
