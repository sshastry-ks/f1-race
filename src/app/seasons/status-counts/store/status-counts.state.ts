import { StatusCount } from '@seasons/status-counts/models';
import { RequestState } from '@app/models';

export interface StatusCountsState {
    statusCounts: StatusCount[];
    requestState: RequestState;
}

export const initialStatusCounts: StatusCountsState = {
    statusCounts: [],
    requestState: RequestState.INIT,
}