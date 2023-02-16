import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Spl3Component } from './spl3.component';

const routes: Routes = [
  {
    path: '',
    component: Spl3Component,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Spl3RoutingModule { }
