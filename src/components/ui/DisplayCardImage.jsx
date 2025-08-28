export default function DisplayCardImage({ card, mode = 'Quiz' }) {
    const rankLetter = card.rank === '10' ? '10' : card.rank[0].toUpperCase();
    const suitLetter = card.suit[0].toUpperCase();
    const filename = `${rankLetter}${suitLetter}.png`;

    let styles = '';

    if (mode === 'Quiz') {
        styles = 'block w-40 shadow-lg md:w-44 lg:w-52';
    } else {
        styles = 'w-20 sm:w-44 lg:w-52';
    }

    return <img src={`/cards/${filename}`} alt={`${card.rank} of ${card.suit}`} className={styles} />;
}
