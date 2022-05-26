import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { SolitaireComponent } from './components/solitaire/solitaire.component';
import { BlackjackComponent } from './components/blackjack/blackjack.component';
import { GameComponent } from './game.component';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SolitaireComponent,
    BlackjackComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,

    // Material Imports
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class GameModule { }
