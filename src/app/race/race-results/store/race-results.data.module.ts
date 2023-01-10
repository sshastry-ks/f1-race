import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RaceResultsEffects } from "./race-results.effects";
import { RaceResultsReducer } from "./race-results.reducer";
import { RaceResultService } from "./race-results.service";

@NgModule({
    imports: [
        StoreModule.forFeature('raceResults', RaceResultsReducer),
        EffectsModule.forFeature([RaceResultsEffects])
    ],
    providers: [
        RaceResultService
    ]
})
export class RaceResultsDataModule {}