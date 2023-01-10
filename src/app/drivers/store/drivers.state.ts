import { EntityState } from "@ngrx/entity";
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Driver, RequestState } from "src/app/models";


export interface DriverState extends EntityState<Driver> {
    requestState: RequestState;
    limit: number;
    offset: number;
    totalItems: number;
    pageSizeOptions: number[];
}

export function selectId(driver: Driver) {
    return driver.driverId;
}

export const adapter: EntityAdapter<Driver> = createEntityAdapter<Driver>({
    selectId
});

export const initalDriverState: DriverState = adapter.getInitialState({
    requestState: RequestState.INIT,
    limit: 10,
    offset: 0,
    totalItems: 0,
    pageSizeOptions: [10, 15, 25]
})