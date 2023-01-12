import { EntityState } from "@ngrx/entity";
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { RaceResult } from '@race/models';
import { RequestState } from '@app/models';

export interface RaceResultsState extends EntityState<RaceResult> {
    requestState: RequestState;
    limit: number;
    offset: number;
    totalItems: number;
    pageSizeOptions: number[];
}

export function selectId(raceResult: RaceResult) {
    return raceResult.position;
}

export const adapter: EntityAdapter<RaceResult> = createEntityAdapter<RaceResult>({
    selectId
});

export const initalRaceResultsState: RaceResultsState = adapter.getInitialState({
    requestState: RequestState.INIT,
    limit: 10,
    offset: 0,
    totalItems: 0,
    pageSizeOptions: [10, 15, 25],
    selectedRaceId: null
})