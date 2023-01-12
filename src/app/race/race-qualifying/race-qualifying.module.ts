import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceQualifyingComponent } from './race-qualifying.component';
import { RaceResultsDataModule } from './store';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/shared/table/table.module';

const routes: Routes = [
  {
    path: '',
    component: RaceQualifyingComponent
  }
];

@NgModule({
  declarations: [
    RaceQualifyingComponent
  ],
  exports: [
    RaceQualifyingComponent
  ],
  imports: [
    CommonModule,
    RaceResultsDataModule,
    TableModule,
    RouterModule.forChild(routes)
  ],
})
export class RaceQualifyingModule { }
