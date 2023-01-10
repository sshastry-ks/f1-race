import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonsComponent } from './seasons.component';
import { StoreModule } from '@ngrx/store';
import { SeasonReducer } from './store/seasons.reducer';
import { DriversModule } from '../drivers/drivers.module';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [SeasonsComponent],
  exports: [SeasonsComponent],
  imports: [
    CommonModule,
    DriversModule,
    StoreModule.forFeature('seasons', SeasonReducer),
    MatCardModule,
    MatTabsModule
  ]
})
export class SeasonsModule { }
