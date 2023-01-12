import { EntityState } from "@ngrx/entity";
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Race } from "@race/models";
import { RequestState } from '@app/models';

export interface RaceListState extends EntityState<Race> {
    requestState: RequestState;
    limit: number;
    offset: number;
    totalItems: number;
    pageSizeOptions: number[];
}

export function selectId(race: Race) {
    return race.round;
}

export const adapter: EntityAdapter<Race> = createEntityAdapter<Race>({
    selectId
});

export const initalRaceListState: RaceListState = adapter.getInitialState({
    requestState: RequestState.INIT,
    limit: 10,
    offset: 0,
    totalItems: 0,
    pageSizeOptions: [10, 15, 25],
})