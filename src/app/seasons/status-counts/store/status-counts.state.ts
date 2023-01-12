import { RequestState, StatusCount } from "src/app/models";

export interface StatusCountsState {
    statusCounts: StatusCount[];
    requestState: RequestState;
}

export const initialStatusCounts: StatusCountsState = {
    statusCounts: [],
    requestState: RequestState.INIT,
}