import { useQuiz } from '../../context/QuizContext';

import DisplayCardImage from '../ui/DisplayCardImage';
import DisplayCardPosition from '../ui/DisplayCardPosition';

export default function QuizQuestion() {
    const { quiz, getCurrentQuestion } = useQuiz();

    const currentQuestion = getCurrentQuestion();

    if (!currentQuestion) return null;

    return currentQuestion.type === 'cardAtPosition' ? (
        <DisplayCardPosition card={currentQuestion.questionCard} />
    ) : (
        <DisplayCardImage card={currentQuestion.questionCard} />
    );
}
