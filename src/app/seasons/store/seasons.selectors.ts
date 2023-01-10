import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SeasonState } from "./seasons.state";


const selectSeasonState = createFeatureSelector<SeasonState>('seasons');

export const selectCurrentSeason = createSelector(
    selectSeasonState,
    (state: SeasonState) => state.selectedSeason
);