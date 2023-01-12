import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceDetailsComponent } from './race-details.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { RaceDescriptionModule } from '../race-description/race-description.module';
import { RaceDetailsDataModule } from './store/race-details.data.module';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes:Routes = [
  {
    path: '',
    component: RaceDetailsComponent,
    children: [
      {
        path: 'results',
        loadChildren: () => import('../race-results/race-results.module').then(m => m.RaceResultsModule)
      },
      {
        path: 'qualifying',
        loadChildren: () => import('../race-qualifying/race-qualifying.module').then(m => m.RaceQualifyingModule)
      },
      {
        path: 'driver-standings',
        loadChildren: () => import('../race-driver-standings/race-driver-standings.module').then(m => m.RaceDriverStandingsModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'results'
      }
    ]
  },
]

@NgModule({
  declarations: [
    RaceDetailsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatProgressBarModule,
    RaceDescriptionModule,
    RaceDetailsDataModule,
    RouterModule.forChild(routes)
  ]
})
export class RaceDetailsModule { }
