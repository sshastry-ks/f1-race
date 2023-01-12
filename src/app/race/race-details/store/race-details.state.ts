import { Race, RequestState, StatusCount } from "src/app/models";

export interface RaceDetailsState {
    race: Race | null;
    statusCounts: StatusCount[];
    requestState: RequestState;
}

export const initalRaceDetailsState: RaceDetailsState = {
    race: null,
    statusCounts: [],
    requestState: RequestState.INIT,
}