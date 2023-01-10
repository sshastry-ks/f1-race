import { EntityState } from "@ngrx/entity";
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { RaceQualifying, RequestState } from "src/app/models";

export interface RaceQualifyingListState extends EntityState<RaceQualifying> {
    requestState: RequestState;
    limit: number;
    offset: number;
    totalItems: number;
    pageSizeOptions: number[];
}

export function selectId(raceQualifying: RaceQualifying) {
    return raceQualifying.position;
}

export const adapter: EntityAdapter<RaceQualifying> = createEntityAdapter<RaceQualifying>({
    selectId
});

export const initalRaceQualifyingListState: RaceQualifyingListState = adapter.getInitialState({
    requestState: RequestState.INIT,
    limit: 10,
    offset: 0,
    totalItems: 0,
    pageSizeOptions: [10, 15, 25],
    selectedRaceId: null
})