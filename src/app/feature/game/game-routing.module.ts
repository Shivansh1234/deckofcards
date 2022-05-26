import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackjackComponent } from './components/blackjack/blackjack.component';
import { SolitaireComponent } from './components/solitaire/solitaire.component';
import { GameComponent } from './game.component';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'solitaire', component: SolitaireComponent },
  { path: 'blackjack', component: BlackjackComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
