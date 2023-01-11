import { Race, RequestState } from "src/app/models";


export interface RaceDetailState {
    race: Race | null;
    requestState: RequestState;
}

export const initalRaceDetailState: RaceDetailState = {
    race: null,
    requestState: RequestState.INIT,
}