import { EntityState } from "@ngrx/entity";
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { DriverStanding } from '@race/models';
import { RequestState } from '@app/models';

export interface RaceDriverStandingsListState extends EntityState<DriverStanding> {
    requestState: RequestState;
    limit: number;
    offset: number;
    totalItems: number;
    pageSizeOptions: number[];
}

export function selectId(driverStanding: DriverStanding) {
    return driverStanding.position;
}

export const adapter: EntityAdapter<DriverStanding> = createEntityAdapter<DriverStanding>({
    selectId
});

export const initalRaceDriverStandingsListState: RaceDriverStandingsListState = adapter.getInitialState({
    requestState: RequestState.INIT,
    limit: 10,
    offset: 0,
    totalItems: 0,
    pageSizeOptions: [10, 15, 25],
    selectedRaceId: null
})