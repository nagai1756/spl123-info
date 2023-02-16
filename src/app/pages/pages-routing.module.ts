import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'spl1',
        loadChildren: () =>
          import('./spl1/spl1.module').then((m) => m.Spl1Module),
      },
      {
        path: 'spl2',
        loadChildren: () =>
          import('./spl2/spl2.module').then((m) => m.Spl2Module),
      },
      {
        path: 'spl3',
        loadChildren: () =>
          import('./spl3/spl3.module').then((m) => m.Spl3Module),
      },
    ],
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
