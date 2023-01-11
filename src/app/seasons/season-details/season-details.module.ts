import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonDetailsComponent } from './season-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class SeasonDetailsModule { }
