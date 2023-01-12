import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'seasons',
    loadChildren: () => import('./seasons/seasons.module').then(m => m.SeasonsModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'seasons/2021'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
