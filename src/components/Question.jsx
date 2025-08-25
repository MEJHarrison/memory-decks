import { useQuiz } from '../context/QuizContext';

import CardQuestion from './CardQuestion';
import CardAnswer from './CardAnswer';

export default function Question() {
    const { getQuestionText } = useQuiz();

    return (
        <div className="flex flex-col items-center gap-20">
            <CardQuestion />
            <h1>{getQuestionText()}</h1>
            <CardAnswer />
        </div>
    );
}
