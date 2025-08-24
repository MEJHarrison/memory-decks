// import type { CardType } from '../types';

export default function CardImage({ card }) {
    const rankLetter = card.rank[0].toUpperCase();
    const suitLetter = card.suit[0].toUpperCase();
    const filename = `${rankLetter}${suitLetter}.png`;

    return (
        <div className="flex justify-center">
            <img src={`/cards/${filename}`} alt={`${card.rank} of ${card.suit}`} className="w-24 shadow-lg sm:w-32" />
        </div>
    );
}
