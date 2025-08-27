import { useQuiz } from '../context/QuizContext';

import CardImage from './CardImage';
import CardSymbol from './CardSymbol';
import CardPosition from './CardPosition';

export default function CardAnswer() {
    const { getCurrentQuestion, onAnswer } = useQuiz();

    const currentQuestion = getCurrentQuestion();

    if (!currentQuestion) return null;

    const questionAnswers = currentQuestion.answerCards;
    const isPosition = currentQuestion.type === 'positionOfCard';

    return (
        <div className="grid w-full max-w-sm grid-cols-2 gap-4 lg:max-w-4xl lg:grid-cols-4">
            {questionAnswers.map((answerCard) => (
                <button
                    key={answerCard.position}
                    onClick={() => onAnswer(answerCard)}
                    className="rounded-xl border-2 border-transparent hover:border-emerald-400"
                >
                    {/* Display this on screens > 640 width */}
                    <div className="hidden sm:block">
                        {isPosition ? <CardPosition card={answerCard} /> : <CardImage card={answerCard} />}
                    </div>

                    {/* Display for mobile screens */}
                    <div className="rounded-xl bg-white p-3 shadow-md sm:hidden">
                        {isPosition ? (
                            <CardPosition card={answerCard} size="Small" />
                        ) : (
                            <CardSymbol card={answerCard} />
                        )}
                    </div>
                </button>
            ))}
        </div>
    );
}
