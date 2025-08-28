import { useQuiz } from '../../context/QuizContext';

import DisplayCardImage from '../ui/DisplayCardImage';
import DisplayCardSymbol from '../ui/DisplayCardSymbol';
import DisplayCardPosition from '../ui/DisplayCardPosition';

export default function QuizAnswer() {
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
                        {isPosition ? (
                            <DisplayCardPosition card={answerCard} />
                        ) : (
                            <DisplayCardImage card={answerCard} />
                        )}
                    </div>

                    {/* Display for mobile screens */}
                    <div className="rounded-xl bg-white p-3 shadow-md sm:hidden">
                        {isPosition ? (
                            <DisplayCardPosition card={answerCard} size="Small" />
                        ) : (
                            <DisplayCardSymbol card={answerCard} />
                        )}
                    </div>
                </button>
            ))}
        </div>
    );
}
