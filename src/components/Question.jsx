import CardImage from './CardImage';
import CardImageOld from './CardImageOld';
import CardPosition from './CardPosition';
import CardSymbol from './CardSymbol';

export default function Question({ questionCard, answerCards, onAnswer }) {
    console.log(answerCards);
    return (
        <div className="flex flex-col items-center gap-6">
            <CardImage card={questionCard} />
            <CardImageOld rank={'9'} suit={'Hearts'} />
            <CardSymbol rank={'9'} suit={'Hearts'} />
            <CardPosition position={17} />

            <div className="grid w-full max-w-sm grid-cols-2 gap-4">
                {answerCards.map((card) => (
                    // <CardImage key={card.position} rank={card.rank} suit={card.suit} />
                    <button
                        key={card.position}
                        onClick={() => onAnswer(card)}
                        className="rounded-xl bg-white p-3 shadow-md hover:bg-gray-100"
                    >
                        {card.rank} of {card.suit}
                    </button>
                ))}
            </div>
        </div>
    );
}
