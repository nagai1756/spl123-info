import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Spl2Component } from './spl2.component';

const routes: Routes = [
  {
    path: '',
    component: Spl2Component,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Spl2RoutingModule { }
