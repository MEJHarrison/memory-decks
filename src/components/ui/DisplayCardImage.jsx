export default function DisplayCardImage({ card, className }) {
    const rankLetter = card.rank === '10' ? '10' : card.rank[0].toUpperCase();
    const suitLetter = card.suit[0].toUpperCase();
    const filename = `${rankLetter}${suitLetter}.png`;

    return (
        <img
            src={`/cards/${filename}`}
            alt={`${card.rank} of ${card.suit}`}
            className={'block w-40 shadow-lg md:w-44 lg:w-52'}
        />
    );
}
