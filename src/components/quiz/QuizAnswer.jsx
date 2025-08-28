import { useQuiz } from '../../context/QuizContext';

import DisplayCardImage from '../ui/DisplayCardImage';
import DisplayCardSymbol from '../ui/DisplayCardSymbol';
import DisplayCardPosition from '../ui/DisplayCardPosition';
import { useState } from 'react';

export default function QuizAnswer() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const { getCurrentQuestion, onAnswer } = useQuiz();

    const currentQuestion = getCurrentQuestion();

    if (!currentQuestion) return null;

    const questionAnswers = currentQuestion.answerCards;
    const isPosition = currentQuestion.type === 'positionOfCard';

    function handleClick(answerCard) {
        const correct = answerCard.position === currentQuestion.answerCard.position;

        setSelectedCard(answerCard);
        setIsCorrect(correct);

        setTimeout(() => {
            onAnswer(answerCard);
            setSelectedCard(null);
            setIsCorrect(null);
        }, 1200);
    }

    return (
        <div className="grid w-full max-w-sm grid-cols-2 gap-4 lg:max-w-4xl lg:grid-cols-4">
            {questionAnswers.map((answerCard) => {
                const showOverlay = selectedCard?.position === answerCard.position;

                return (
                    <div key={answerCard.position} className="relative rounded-xl">
                        <button
                            key={answerCard.position}
                            onClick={() => handleClick(answerCard)}
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

                            {showOverlay && (
                                <div
                                    className={`absolute inset-0 rounded-xl transition-colors duration-300 ${isCorrect ? 'bg-green-500/30' : 'bg-red-500/30'}`}
                                />
                            )}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
