import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { DeckComponent } from './components/deck/deck.component';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    DeckComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,

    // Material Imports
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatSnackBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class FeatureModule { }
