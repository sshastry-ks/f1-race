import { CarStatusCounts, Race, RequestState, StatusCount } from "src/app/models";

export interface RaceDetailState {
    race: Race | null;
    statusCounts: StatusCount[];
    requestState: RequestState;
}

export const initalRaceDetailState: RaceDetailState = {
    race: null,
    statusCounts: [],
    requestState: RequestState.INIT,
}