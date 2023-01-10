import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from "src/app/models";
import { adapter, RaceResultState } from "./race-results.state";


const selectRaceResultsFeature = createFeatureSelector<RaceResultState>('raceResults');

const {
    selectAll
} = adapter.getSelectors();

export const SelectIsLoadingRaceResultsList = createSelector(
    selectRaceResultsFeature, (state: RaceResultState) => state.requestState === RequestState.LOADING
);

export const selectAllRaceResults = createSelector(selectRaceResultsFeature, selectAll);

export const selectTotalRaceResults = createSelector(
    selectRaceResultsFeature,
    (state: RaceResultState) => state.totalItems
);

export const selectCurrentPageSize = createSelector(
    selectRaceResultsFeature,
    (state: RaceResultState) => state.limit
);

export const selectCurrnetPage = createSelector(
    selectRaceResultsFeature,
    (state: RaceResultState) => state.offset
);

export const selectTotalPages = createSelector(
    selectTotalRaceResults,
    selectCurrentPageSize,
    (total, pageSize) => Math.ceil(total / pageSize)
);

export const selectPageSizeOptions = createSelector(
    selectRaceResultsFeature,
    (state: RaceResultState) => state.pageSizeOptions
);

export const selectRaceResultsQueryParams = createSelector(selectCurrnetPage, selectCurrentPageSize, (offset, limit) => {
    return {
        offset,
        limit
    }
})
