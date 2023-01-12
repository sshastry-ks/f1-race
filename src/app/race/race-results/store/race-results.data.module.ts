import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RaceResultsEffects } from "./race-results.effects";
import { raceResultsReducer } from "./race-results.reducer";
import { RaceResultsService } from "./race-results.service";

@NgModule({
    imports: [
        StoreModule.forFeature('raceResults', raceResultsReducer),
        EffectsModule.forFeature([RaceResultsEffects])
    ],
    providers: [
        RaceResultsService
    ]
})
export class RaceResultsDataModule {}