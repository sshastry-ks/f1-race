import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeasonsModule } from './seasons/seasons.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Test } from './test-service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RaceListModule } from './race/race-list/race-list.module';
import { DriversModule } from './drivers/drivers.module';
import { RaceDetailsModule } from './race/race-details/race-details.module';
import { RaceResultsModule } from './race/race-results/race-results.module';
import { RaceQualifyingModule } from './race/race-qualifying/race-qualifying.module';
import { RaceDriverStandingsModule } from './race/race-driver-standings/race-driver-standings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SeasonsModule,
    DriversModule,
    RaceListModule,
    RaceDetailsModule,
    RaceResultsModule,
    RaceQualifyingModule,
    RaceDriverStandingsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 250})
  ],
  providers: [Test],
  bootstrap: [AppComponent]
})
export class AppModule { }
