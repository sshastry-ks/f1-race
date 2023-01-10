import { Action, createReducer, on } from "@ngrx/store";
import { initialSeasonState, SeasonState } from "./seasons.state";

const reducer = createReducer(
    initialSeasonState,
);


export function SeasonReducer(state: SeasonState | undefined, action: Action) {
    return reducer(state, action)
}