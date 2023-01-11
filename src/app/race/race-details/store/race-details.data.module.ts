import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RaceDetailsEffects } from "./race-details.effects";
import { raceDetailsReducer } from "./race-details.reducer";
import { RaceDetailsService } from "./race-details.service";

@NgModule({
    imports:[
        StoreModule.forFeature('raceDetails', raceDetailsReducer),
        EffectsModule.forFeature([RaceDetailsEffects])
    ],
    providers: [
        RaceDetailsService
    ]
})
export class RaceDetailsDataModule {}