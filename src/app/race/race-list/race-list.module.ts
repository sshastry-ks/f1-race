import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceListComponent } from './race-list.component';
import { RaceDataModule } from './store';
import { RouterModule, Routes } from '@angular/router'
import { TableModule } from 'src/app/shared/table/table.module';

const routes: Routes = [
  {
    path: '',
    component: RaceListComponent,
  }
]

@NgModule({
  declarations: [
    RaceListComponent
  ],
  imports: [
    CommonModule,
    RaceDataModule,
    TableModule,
    RouterModule.forChild(routes)
  ],
})
export class RaceListModule { }
