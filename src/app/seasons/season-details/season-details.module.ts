import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonDetailsComponent } from './season-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';

const routes: Routes = [ 
  {
    path: '',
    component: SeasonDetailsComponent,
    children: [
      {
        path: 'drivers',
        loadChildren: () => import('../../drivers/drivers.module').then(m => m.DriversModule)
      },
      {
        path: 'races',
        loadChildren: () => import('../../race/race-list/race-list.module').then(m => m.RaceListModule)
      },
      {
        path: 'races/:raceId',
        loadChildren: () => import('../../race/race-details/race-details.module').then(m => m.RaceDetailsModule)
      },
      {
        path: 'status-counts',
        loadChildren: () => import('../status-counts/status-counts.module').then(m => m.StatusCountsModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'drivers'
      }
    ]
  },
];

@NgModule({
  declarations: [
    SeasonDetailsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatBadgeModule,
    RouterModule.forChild(routes)
  ]
})
export class SeasonDetailsModule { }
