import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { suit, value } from 'src/app/shared/constant';
import { FeatureService } from '../../feature.service';
import { Card } from '../../models/card';
import { Deck } from '../../models/deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit, OnDestroy {

  listOfAllCards: Card[] = [];
  deck_id: string = "";
  remCard: number = 52;
  finishGame: boolean = false;

  cardValue: string[] = [];
  cardSuit: string[] = [];

  chanceA: boolean = true;
  chanceB: boolean = false;
  drawCardA: Card[] = [];
  drawCardB: Card[] = [];

  formValue = new FormControl('', Validators.required);
  formSuit = new FormControl('', Validators.required);

  private newSubs = new Subscription();


  constructor(private featureService: FeatureService, private snackbar: MatSnackBar, private fb: FormBuilder) { }

  getDeck(): void {
    this.newSubs.add(this.featureService.getDeck().subscribe({
      next: (x: Deck) => {
        this.listOfAllCards = x.cards;
        this.deck_id = x.deck_id;
      },
      error: (err: Error) => {
        console.log(err);
      }
    }));
  }

  getCardDetailForA(): void {
    if (!this.finishGame) {
      if (this.chanceA) {
        this.featureService.getCardFromDeckId(this.deck_id).subscribe({
          next: (x: Deck) => {
            this.drawCardA = x.cards;
            this.remCard = this.remCard - 1;

            if ((this.drawCardA[0].value === this.formValue.value) && (this.drawCardA[0].suit === this.formSuit.value)) {
              this.finishGame = true;
              this.snackbar.open('Player A has won the game!', 'Ok');
            }
          }
        });
        this.chanceA = false;
        this.chanceB = true;
      } else {
        this.snackbar.open(`B's chance is left!`, 'Ok');
      }
    } else {
      this.snackbar.open('Game has been finished, please proceed to next for Stats.', 'Ok');
    }
  }

  getCardDetailForB(): void {
    if (!this.finishGame) {
      if (this.chanceB) {
        this.featureService.getCardFromDeckId(this.deck_id).subscribe({
          next: (x: Deck) => {
            this.drawCardB = x.cards;
            this.remCard = this.remCard - 1;

            if ((this.drawCardB[0].value === this.formValue.value) && (this.drawCardB[0].suit === this.formSuit.value)) {
              this.finishGame = true;
              this.snackbar.open('Player B has won the game!', 'Ok');
            }
          }
        });
        this.chanceA = true;
        this.chanceB = false;
      } else {
        this.snackbar.open(`A's chance is left!`, 'Ok');
      }
    } else {
      this.snackbar.open('Game has been finished, please proceed to next for Stats.', 'Ok');
    }
  }

  ngOnInit(): void {
    this.cardValue = value;
    this.cardSuit = suit;
    this.getDeck();
  }

  ngOnDestroy(): void {
    this.newSubs.unsubscribe();
  }

}
