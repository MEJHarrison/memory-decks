import { useQuiz } from '../context/QuizContext';

import CardImage from './CardImage';
import CardPosition from './CardPosition';

export default function CardQuestion() {
    const { quiz, getCurrentQuestion } = useQuiz();

    const currentQuestion = getCurrentQuestion();

    if (!currentQuestion) return null;

    return currentQuestion.type === 'cardAtPosition' ? (
        <CardPosition card={currentQuestion.questionCard} />
    ) : (
        <CardImage card={currentQuestion.questionCard} />
    );
}
