import { Action, createReducer, on } from "@ngrx/store";
import { initialSeasonState, SeasonState } from "./seasons.state";
import * as SeasonActions from './seasons.actions';

const reducer = createReducer(
    initialSeasonState,

    on(SeasonActions.seasonSelectionChanged, (state: SeasonState, {newSeason}) => {
        return {
            ...state,
            selectedSeason: newSeason
        }
    })
)


export function SeasonReducer(state: SeasonState | undefined, action: Action) {
    return reducer(state, action)
}