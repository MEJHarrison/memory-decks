export default function CardSymbol({ card }) {
    const rankLetter = card.rank === '10' ? '10' : card.rank[0].toUpperCase();

    function getSuitSymbol(suitLetter) {
        switch (suitLetter) {
            case 'C':
                return '♣️';
            case 'H':
                return '♥️';
            case 'S':
                return '♠️';
            case 'D':
                return '♦️';
        }
    }

    return (
        <div className="flex w-32 items-center justify-center">
            <div className="p-1 text-4xl">{rankLetter}</div>
            <div className="p-1 text-2xl">{getSuitSymbol(card.suit[0])}</div>
        </div>
    );
}
