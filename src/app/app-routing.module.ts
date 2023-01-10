import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers/drivers.component';
import { RaceDetailsComponent } from './race/race-details/race-details.component';
import { RaceDriverStandingsComponent } from './race/race-driver-standings/race-driver-standings.component';
import { RaceListComponent } from './race/race-list/race-list.component';
import { RaceQualifyingComponent } from './race/race-qualifying/race-qualifying.component';
import { RaceResultsComponent } from './race/race-results/race-results.component';
import { SeasonsComponent } from './seasons/seasons.component';

const routes: Routes = [
  {
    path: 'seasons/:id',
    component: SeasonsComponent,
    children: [
      {
        path: 'drivers',
        component: DriversComponent
      },
      {
        path: 'races',
        component: RaceListComponent,
      },
      {
        path: 'races/:id',
        component: RaceDetailsComponent,
        children: [
          {
            path: 'results',
            component: RaceResultsComponent
          },
          {
            path: 'qualifying',
            component: RaceQualifyingComponent
          },
          {
            path: 'driver-standings',
            component: RaceDriverStandingsComponent
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'results'
          }
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'drivers'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'seasons/2018'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
