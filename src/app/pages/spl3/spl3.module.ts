import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Spl3RoutingModule } from './spl3-routing.module';
import { Spl3Component } from './spl3.component';
import { HeaderComponent } from './shared/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Spl3Component,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    Spl3RoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    FormsModule
  ]
})
export class Spl3Module { }
