import { Action, createReducer, on } from "@ngrx/store";
import { initalRaceDetailsState, RaceDetailsState } from "./race-details.state";
import * as RaceDetailActions from './race-details.actions';
import { RequestState } from "src/app/models";

const reducer = createReducer(
    initalRaceDetailsState,

    on(RaceDetailActions.loadRaceEntity, (state: RaceDetailsState) => {
        return {
            ...state,
            requestState: RequestState.LOADING
        }
    }),
    on(RaceDetailActions.loadRaceEntitySuccess, (state: RaceDetailsState, {race}) => {
        return {
            ...state,
            race,
            requestState: RequestState.RESOLVED
        }
    }),
    on(RaceDetailActions.loadRaceEntityFailure, (state: RaceDetailsState) => {
        return {
            ...state,
            requestState: RequestState.ERROR
            
        }
    })
);

export function raceDetailsReducer(state: RaceDetailsState | undefined, action: Action) {
    return reducer(state, action);
}