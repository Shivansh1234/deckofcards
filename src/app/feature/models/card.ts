import { CardImage } from "./card-image";

export interface Card {
    code: string;
    image: string;
    images: CardImage;
    value: string;
    suit: string;
}
