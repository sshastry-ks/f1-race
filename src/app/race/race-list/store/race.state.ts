import { EntityState } from "@ngrx/entity";
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Race, RequestState } from "src/app/models";

export interface RaceState extends EntityState<Race> {
    requestState: RequestState;
    limit: number;
    offset: number;
    totalItems: number;
    pageSizeOptions: number[];
    selectedRaceId: string | null;
}

export function selectId(race: Race) {
    return race.round;
}

export const adapter: EntityAdapter<Race> = createEntityAdapter<Race>({
    selectId
});

export const initalRaceState: RaceState = adapter.getInitialState({
    requestState: RequestState.INIT,
    limit: 10,
    offset: 0,
    totalItems: 0,
    pageSizeOptions: [10, 15, 25],
    selectedRaceId: null
})