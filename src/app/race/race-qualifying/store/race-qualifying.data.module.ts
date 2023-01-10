import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RaceQualifyingListEffects } from "./race-qualifying.effects";
import { RaceQualifyingListReducer } from "./race-qualifying.reducer";
import { RaceQualifyingListService } from "./race-qualifying.service";

@NgModule({
    imports: [
        StoreModule.forFeature('raceQualifyingList', RaceQualifyingListReducer),
        EffectsModule.forFeature([RaceQualifyingListEffects])
    ],
    providers: [
        RaceQualifyingListService
    ]
})
export class RaceResultsDataModule {}