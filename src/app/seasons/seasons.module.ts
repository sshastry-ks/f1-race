import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonsComponent } from './seasons.component';
import { StoreModule } from '@ngrx/store';
import { SeasonReducer } from './store/seasons.reducer';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SeasonEffects } from './store/seasons.effects';
import { MatChipsModule } from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';

const routes: Routes = [
  {
    path: '',
    component: SeasonsComponent,
    children: [
      {
        path: ':season',
        loadChildren: () => import('./season-details/season-details.module').then(m => m.SeasonDetailsModule)
      }
    ]
  },
]

@NgModule({
  declarations: [SeasonsComponent],
  exports: [SeasonsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('seasons', SeasonReducer),
    EffectsModule.forFeature([SeasonEffects]),
    MatChipsModule,
    MatDividerModule,
    MatToolbarModule,
    RouterModule.forChild(routes)
  ]
})
export class SeasonsModule { }
