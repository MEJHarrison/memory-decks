// import type { CardType } from '../types';

export default function CardImage({ rank, suit }) {
    const rankLetter = rank[0].toUpperCase();
    const suitLetter = suit[0].toUpperCase();
    const filename = `${rankLetter}${suitLetter}.png`;

    return (
        <div className="flex justify-center">
            <img src={`/cards/${filename}`} alt={`${rank} of ${suit}`} className="w-24 shadow-lg sm:w-32" />
        </div>
    );
}
