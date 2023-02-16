import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Spl1Component } from './spl1.component';

const routes: Routes = [
  {
    path: '',
    component: Spl1Component,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class spl1RoutingModule { }
