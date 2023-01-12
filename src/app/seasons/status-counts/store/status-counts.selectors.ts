import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from '@app/models';
import {  StatusCountsState } from "./status-counts.state";

const selectStatusCountsFeature = createFeatureSelector<StatusCountsState>('statusCounts');

export const selectIsLoadingStatusCounts = createSelector(
    selectStatusCountsFeature,
    (state: StatusCountsState) => state.requestState === RequestState.LOADING
);

export const selectStatusCounts = createSelector(
    selectStatusCountsFeature,
    (state: StatusCountsState) => state.statusCounts
);

export const selectTotalStatus = createSelector(
    selectStatusCountsFeature,
    (state: StatusCountsState) => state.statusCounts.length
);
