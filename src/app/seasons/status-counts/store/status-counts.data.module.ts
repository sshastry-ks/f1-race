import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StatusCountsEffects } from "./status-counts.effects";
import { statusCountsReducer } from "./status-counts.reducer";
import { StatusCountsService } from "./status-counts.service";

@NgModule({
    imports: [
        StoreModule.forFeature('statusCounts', statusCountsReducer),
        EffectsModule.forFeature([StatusCountsEffects])
    ],
    providers: [
        StatusCountsService
    ]
})
export class StatusCountsDataModule {}