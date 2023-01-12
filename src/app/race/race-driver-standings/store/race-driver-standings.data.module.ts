import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RaceDriverStandingsListEffects } from "./race-driver-standings.effects";
import { raceDriverStandingsListReducer } from "./race-driver-standings.reducer";
import { RaceDriverStandingsListService } from "./race-driver-standings.service";


@NgModule({
    imports: [
        StoreModule.forFeature('raceDriverStandingsList', raceDriverStandingsListReducer),
        EffectsModule.forFeature([RaceDriverStandingsListEffects])
    ],
    providers: [
        RaceDriverStandingsListService
    ]
})
export class RaceDriverStandingsDataModule {}