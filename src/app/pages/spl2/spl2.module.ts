import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Spl2RoutingModule } from './spl2-routing.module';
import { Spl2Component } from './spl2.component';
import { HeaderComponent } from './shared/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Spl2Component,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    Spl2RoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    FormsModule
  ]
})
export class Spl2Module { }
