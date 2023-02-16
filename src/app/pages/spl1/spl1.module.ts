import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Spl1Component } from './spl1.component';
import { HeaderComponent } from './shared/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { spl1RoutingModule } from './spl1-routing.module';

@NgModule({
  declarations: [
    Spl1Component,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    spl1RoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    FormsModule
  ]
})
export class Spl1Module { }
