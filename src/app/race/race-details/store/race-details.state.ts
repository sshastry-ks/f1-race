import { Race } from '@race/models';
import { RequestState } from '@app/models';

export interface RaceDetailsState {
    race: Race | null;
    requestState: RequestState;
}

export const initalRaceDetailsState: RaceDetailsState = {
    race: null,
    requestState: RequestState.INIT,
}