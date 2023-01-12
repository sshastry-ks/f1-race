import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DriversListEffects } from './drivers.effects';
import { DriversListReducer } from './drivers.reducer';
import { DriverService } from './drivers.service';

@NgModule({
    imports: [
        StoreModule.forFeature('driversList', DriversListReducer),
        EffectsModule.forFeature([DriversListEffects])
    ],
    providers: [
        DriverService
    ]
})
export class DriverdataModule {}