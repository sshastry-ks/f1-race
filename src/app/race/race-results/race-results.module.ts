import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceResultsComponent } from './race-results.component';
import { RaceResultsDataModule } from './store';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/shared/table/table.module';

const routes: Routes = [
  {
    path: '',
    component: RaceResultsComponent
  }
];

@NgModule({
  declarations: [
    RaceResultsComponent
  ],
  exports: [
    RaceResultsComponent
  ],
  imports: [
    CommonModule,
    RaceResultsDataModule,
    TableModule,
    RouterModule.forChild(routes)
  ],
})
export class RaceResultsModule { }
