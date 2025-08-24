export default function CardSymbol({ rank, suit }) {
    const suitLetter = suit[0].toUpperCase();

    let symbolStyles = 'flex h-52 w-32 items-center justify-center rounded-lg bg-white text-5xl shadow-lg ';

    if (suitLetter === 'D' || suitLetter === 'H') {
        symbolStyles += 'text-red-600';
    } else {
        symbolStyles += 'text-black';
    }

    let cardSymbol = '';

    if (suitLetter === 'C') {
        cardSymbol = '♣️';
    } else if (suitLetter === 'H') {
        cardSymbol = '♥️';
    } else if (suitLetter === 'S') {
        cardSymbol = '♠️';
    } else {
        cardSymbol = '♦️';
    }

    return (
        <div className="flex justify-center">
            <span className={symbolStyles}>
                {rank}
                {cardSymbol}
            </span>
        </div>
    );
}
