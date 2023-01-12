import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from "src/app/models";
import { adapter, RaceResultsState } from "./race-results.state";

const selectRaceResultsFeature = createFeatureSelector<RaceResultsState>('raceResults');

const {
    selectAll
} = adapter.getSelectors();

export const SelectIsLoadingRaceResultsList = createSelector(
    selectRaceResultsFeature, (state: RaceResultsState) => state.requestState === RequestState.LOADING
);

export const selectAllRaceResults = createSelector(selectRaceResultsFeature, selectAll);

export const selectTotalRaceResults = createSelector(
    selectRaceResultsFeature,
    (state: RaceResultsState) => state.totalItems
);

export const selectCurrentPageSize = createSelector(
    selectRaceResultsFeature,
    (state: RaceResultsState) => state.limit
);

export const selectCurrentPage = createSelector(
    selectRaceResultsFeature,
    (state: RaceResultsState) => state.offset
);

export const selectPageSizeOptions = createSelector(
    selectRaceResultsFeature,
    (state: RaceResultsState) => state.pageSizeOptions
);

export const selectRaceResultsQueryParams = createSelector(
    selectCurrentPage, selectCurrentPageSize, (page, limit) => {
    return {
        offset: page * limit,
        limit
    }
})
