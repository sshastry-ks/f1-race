import { Action, createReducer, on } from "@ngrx/store";
import { initalRaceDetailState, RaceDetailState } from "./race-details.state";
import * as RaceDetailActions from './race-details.actions';
import { RequestState } from "src/app/models";

const reducer = createReducer(
    initalRaceDetailState,

    on(RaceDetailActions.loadRaceEntity, (state: RaceDetailState) => {
        return {
            ...state,
            requestState: RequestState.LOADING
        }
    }),
    on(RaceDetailActions.loadRaceEntitySuccess, (state: RaceDetailState, {race}) => {
        return {
            ...state,
            race,
            requestState: RequestState.RESOLVED
        }
    }),
    on(RaceDetailActions.loadRaceEntityFailure, (state: RaceDetailState) => {
        return {
            ...state,
            requestState: RequestState.ERROR
            
        }
    })
);

export function raceDetailsReducer(state: RaceDetailState | undefined, action: Action) {
    return reducer(state, action);
}