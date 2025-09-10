import { useState } from 'react';
import { motion } from 'framer-motion';

import QuizCard from './QuizCard';
import { useQuiz } from '../../context/QuizContext';

export default function QuizAnswers() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const { getCurrentQuestion, onAnswer } = useQuiz();

    const currentQuestion = getCurrentQuestion();

    if (!currentQuestion) return null;

    const questionAnswers = currentQuestion.answerCards;

    function handleClick(answerCard) {
        const correct = answerCard.position === currentQuestion.answerCard.position;

        setSelectedCard(answerCard);
        setIsCorrect(correct);

        setTimeout(() => {
            onAnswer(answerCard);
            setSelectedCard(null);
            setIsCorrect(null);
        }, 2500);
    }

    return (
        <motion.div
            key={currentQuestion.id}
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid w-full max-w-sm grid-cols-2 gap-4 lg:max-w-4xl lg:grid-cols-4"
        >
            {questionAnswers.map((answerCard) => (
                <QuizCard
                    key={answerCard.position}
                    card={answerCard}
                    isPosition={currentQuestion.type === 'positionOfCard'}
                    selectedCard={selectedCard}
                    isCorrect={isCorrect}
                    onClick={handleClick}
                    questionId={currentQuestion.id}
                />
            ))}
        </motion.div>
    );
}
