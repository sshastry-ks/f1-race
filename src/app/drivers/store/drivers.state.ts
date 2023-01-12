import { EntityState } from "@ngrx/entity";
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Driver } from "@drivers/models";
import { RequestState } from '@app/models';


export interface DriversListState extends EntityState<Driver> {
    requestState: RequestState;
    limit: number;
    offset: number;
    totalItems: number;
    pageSizeOptions: number[];
}

export function selectId(driver: Driver) {
    return driver.code;
}

export const adapter: EntityAdapter<Driver> = createEntityAdapter<Driver>({
    selectId
});

export const initalDriversListState: DriversListState = adapter.getInitialState({
    requestState: RequestState.INIT,
    limit: 10,
    offset: 0,
    totalItems: 0,
    pageSizeOptions: [10, 15, 25]
})