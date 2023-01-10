import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from "src/app/models";
import { adapter, RaceState } from "./race.state";


const selectRaceFeature = createFeatureSelector<RaceState>('races');

const {
    selectAll
} = adapter.getSelectors();

export const SelectIsLoadingDriverList = createSelector(
    selectRaceFeature, (state: RaceState) => state.requestState === RequestState.LOADING
);

export const selectAllRaces = createSelector(selectRaceFeature, selectAll);

export const selectTotalRaces = createSelector(
    selectRaceFeature,
    (state: RaceState) => state.totalItems
);

export const selectCurrentPageSize = createSelector(
    selectRaceFeature,
    (state: RaceState) => state.limit
);

export const selectCurrnetPage = createSelector(
    selectRaceFeature,
    (state: RaceState) => state.offset
);

export const selectTotalPages = createSelector(
    selectTotalRaces,
    selectCurrentPageSize,
    (total, pageSize) => Math.ceil(total / pageSize)
);

export const selectPageSizeOptions = createSelector(
    selectRaceFeature,
    (state: RaceState) => state.pageSizeOptions
);

export const selectRaceQueryParams = createSelector(selectCurrnetPage, selectCurrentPageSize, (offset, limit) => {
    return {
        offset,
        limit
    }
})
