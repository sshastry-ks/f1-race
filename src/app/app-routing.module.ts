import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeasonsComponent } from './seasons/seasons.component';

const routes: Routes = [
  {
    path: 'seasons/:id',
    component: SeasonsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'seasons/2018'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
