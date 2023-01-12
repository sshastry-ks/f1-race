import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonsComponent } from './seasons.component';
import { RouterModule, Routes } from '@angular/router';
import { SeasonsDataModule } from './store/seasons.data.module';

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
    SeasonsDataModule,
    RouterModule.forChild(routes)
  ]
})
export class SeasonsModule { }
