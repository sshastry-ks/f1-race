import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from '@app/models';
import { RaceQualifyingListState, adapter } from "./race-qualifying.state";

const selectRaceQualifyingListFeature =
    createFeatureSelector<RaceQualifyingListState>('raceQualifyingList');

const {
    selectAll
} = adapter.getSelectors();

export const SelectIsLoadingRaceQualifyingList = createSelector(
    selectRaceQualifyingListFeature,
    (state: RaceQualifyingListState) => state.requestState === RequestState.LOADING
);

export const selectAllRaceQulifyingRecords = createSelector(
    selectRaceQualifyingListFeature, selectAll
);

export const selectTotalRaceResults = createSelector(
    selectRaceQualifyingListFeature,
    (state: RaceQualifyingListState) => state.totalItems
);

export const selectCurrentPageSize = createSelector(
    selectRaceQualifyingListFeature,
    (state: RaceQualifyingListState) => state.limit
);

export const selectCurrentPage = createSelector(
    selectRaceQualifyingListFeature,
    (state: RaceQualifyingListState) => state.offset
);

export const selectPageSizeOptions = createSelector(
    selectRaceQualifyingListFeature,
    (state: RaceQualifyingListState) => state.pageSizeOptions
);

export const selectRaceQualifyingListQueryParams = createSelector(
    selectCurrentPage, selectCurrentPageSize,
    (page, limit) => {
        return {
            offset: page * limit,
            limit
        }
    }
)
