import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from '@app/models';
import { RaceDetailsState } from "./race-details.state";

const selectRaceDetailsFeature = createFeatureSelector<RaceDetailsState>('raceDetails');

export const selectActiveRaceEntity = createSelector(
    selectRaceDetailsFeature, (state: RaceDetailsState) => state?.race || null
);

export const selectIsLoadingRaceDetails = createSelector(
    selectRaceDetailsFeature, (state: RaceDetailsState) => state.requestState === RequestState.LOADING
);