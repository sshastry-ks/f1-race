import { createFeatureSelector, createSelector } from "@ngrx/store";
import { race } from "rxjs";
import { RequestState } from "src/app/models";
import { RaceDetailState } from "./race-details.state";

const selectRaceDetailsFeature = createFeatureSelector<RaceDetailState>('raceDetails');

export const selectActiveRaceEntity = createSelector(
    selectRaceDetailsFeature, (state: RaceDetailState) => state?.race || null
);

export const selectIsLoadingraceDetails = createSelector(
    selectRaceDetailsFeature, (state: RaceDetailState) => state.requestState === RequestState.LOADING
);