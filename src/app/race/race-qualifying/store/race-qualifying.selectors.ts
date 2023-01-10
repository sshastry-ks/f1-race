import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from "src/app/models";
import { RaceQualifyingListState, adapter } from "./race-qualifying.state";

const selectRaceQualifyingListFeature = createFeatureSelector<RaceQualifyingListState>('raceQualifyingList');

const {
    selectAll
} = adapter.getSelectors();

export const SelectIsLoadingRaceQualifyingList = createSelector(
    selectRaceQualifyingListFeature, (state: RaceQualifyingListState) => state.requestState === RequestState.LOADING
);

export const selectAllRaceQulifyingRecords = createSelector(selectRaceQualifyingListFeature, selectAll);

export const selectTotalRaceResults = createSelector(
    selectRaceQualifyingListFeature,
    (state: RaceQualifyingListState) => state.totalItems
);

export const selectCurrentPageSize = createSelector(
    selectRaceQualifyingListFeature,
    (state: RaceQualifyingListState) => state.limit
);

export const selectCurrnetPage = createSelector(
    selectRaceQualifyingListFeature,
    (state: RaceQualifyingListState) => state.offset
);

export const selectTotalPages = createSelector(
    selectTotalRaceResults,
    selectCurrentPageSize,
    (total, pageSize) => Math.ceil(total / pageSize)
);

export const selectPageSizeOptions = createSelector(
    selectRaceQualifyingListFeature,
    (state: RaceQualifyingListState) => state.pageSizeOptions
);

export const selectRaceQualifyingListQueryParams = createSelector(selectCurrnetPage, selectCurrentPageSize, (offset, limit) => {
    return {
        offset,
        limit
    }
})