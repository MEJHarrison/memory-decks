import { useQuiz } from '../context/QuizContext';

import CardImage from './CardImage';
import CardPosition from './CardPosition';

export default function CardQuestion() {
    const { quiz, getCurrentQuestion } = useQuiz();

    const currentQuestion = getCurrentQuestion();

    return currentQuestion.type === 'cardAtPosition' ? (
        <CardPosition card={currentQuestion.questionCard} />
    ) : (
        <CardImage card={currentQuestion.questionCard} />
    );
}
