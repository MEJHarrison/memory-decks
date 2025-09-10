export default function DisplayCardImage({ card, mode = 'Quiz' }) {
    const rankLetter = card.rank === '10' ? '10' : card.rank[0].toUpperCase();
    const suitLetter = card.suit[0].toUpperCase();
    const filename = `${rankLetter}${suitLetter}.png`;

    // aspect ratio matches poker card (691x1056)
    const aspectClasses = 'aspect-[691/1056]';

    let sizeClasses = '';
    if (mode === 'Quiz') {
        sizeClasses = 'w-40 md:w-44 lg:w-52';
    } else {
        sizeClasses = 'w-20 sm:w-44 lg:w-52';
    }

    return (
        <div className={`relative ${aspectClasses} ${sizeClasses}`}>
            <img
                src={`/cards/${filename}`}
                alt={`${card.rank} of ${card.suit}`}
                className="h-full w-full rounded-lg object-contain shadow-lg"
            />
        </div>
    );
}
