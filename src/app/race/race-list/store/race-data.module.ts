import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RaceListEffects } from "./race.effects";
import { RaceListReducer } from "./race.reducer";
import { RaceService } from "./race.service";

@NgModule({
    imports: [
        StoreModule.forFeature('raceList', RaceListReducer),
        EffectsModule.forFeature([RaceListEffects])
    ],
    providers: [
        RaceService
    ]
})
export class RaceDataModule {}