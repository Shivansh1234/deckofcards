import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deck } from './models/deck';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http: HttpClient) { }

  getDeck(): Observable<Deck> {
    return this.http.get<Deck>(`${environment.apiUrl}deck/new/draw/?count=0`);
  }

  getCardFromDeckId(deck_id: string): Observable<Deck> {
    console.log(`${environment.apiUrl}deck/${deck_id}/draw/?count=1`);
    return this.http.get<Deck>(`${environment.apiUrl}deck/${deck_id}/draw/?count=1`);
  }
}
