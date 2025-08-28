export default function CardAbbreviation({ card }) {
    function getRankLetter(card) {
        return card.rank === '10' ? '10' : card.rank[0].toUpperCase();
    }

    function getSuitSymbol(card) {
        switch (card.suit[0]) {
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
        <>
            {getRankLetter(card)}
            <span style={{ fontSize: '0.8em' }}>{getSuitSymbol(card)}</span>
        </>
    );
}
