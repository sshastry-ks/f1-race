import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCountsComponent } from './status-counts.component';
import { StatusCountsDataModule } from './store/status-counts.data.module';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes: Routes = [
  {
    path: '',
    component: StatusCountsComponent
  }
];

@NgModule({
  declarations: [
    StatusCountsComponent
  ],
  exports: [
    StatusCountsComponent
  ],
  imports: [
    CommonModule,
    StatusCountsDataModule,
    MatListModule,
    MatProgressBarModule,
    RouterModule.forChild(routes)
  ]
})
export class StatusCountsModule { }
