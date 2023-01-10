import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from "src/app/models";
import { adapter, RaceDriverStandingsListState } from "./race-driver-standings.state";

const selectRaceDriverStandingsListFeature = createFeatureSelector<RaceDriverStandingsListState>('raceDriverStandingsList');

const {
    selectAll
} = adapter.getSelectors();

export const SelectIsLoadingRaceDriverStandingsList = createSelector(
    selectRaceDriverStandingsListFeature, (state: RaceDriverStandingsListState) => state.requestState === RequestState.LOADING
);

export const selectAllRaceDriverStandingsRecords = createSelector(selectRaceDriverStandingsListFeature, selectAll);

export const selectTotalRaceDriverStandingsRecords = createSelector(
    selectRaceDriverStandingsListFeature,
    (state: RaceDriverStandingsListState) => state.totalItems
);

export const selectCurrentPageSize = createSelector(
    selectRaceDriverStandingsListFeature,
    (state: RaceDriverStandingsListState) => state.limit
);

export const selectCurrnetPage = createSelector(
    selectRaceDriverStandingsListFeature,
    (state: RaceDriverStandingsListState) => state.offset
);

export const selectTotalPages = createSelector(
    selectTotalRaceDriverStandingsRecords,
    selectCurrentPageSize,
    (total, pageSize) => Math.ceil(total / pageSize)
);

export const selectPageSizeOptions = createSelector(
    selectRaceDriverStandingsListFeature,
    (state: RaceDriverStandingsListState) => state.pageSizeOptions
);

export const selectRaceDriverStandingsListQueryParams = createSelector(selectCurrnetPage, selectCurrentPageSize, (offset, limit) => {
    return {
        offset,
        limit
    }
})
