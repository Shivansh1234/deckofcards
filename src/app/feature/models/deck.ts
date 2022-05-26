import { Card } from "./card";

export interface Deck {
    success: boolean;
    deck_id: string;
    cards: Card[];
    remaining: number;
}
