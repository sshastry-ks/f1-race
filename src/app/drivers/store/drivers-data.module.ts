import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DriverEffects } from './drivers.effects';
import { DriverReducer } from './drivers.reducer';
import { DriverService } from './drivers.service';
import { DriversListHeaderDataService } from './drivers-list-header-data.service';

@NgModule({
    imports: [
        StoreModule.forFeature('driverList', DriverReducer),
        EffectsModule.forFeature([DriverEffects])
    ],
    providers: [
        DriverService,
        DriversListHeaderDataService
    ]
})
export class DriverdataModule {}