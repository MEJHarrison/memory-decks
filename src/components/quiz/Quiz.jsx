import { useQuiz } from '../../context/QuizContext';

import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';

export default function Quiz() {
    const { getQuestionText } = useQuiz();

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="flex flex-col items-center gap-20">
                <QuizQuestion />
                <h1>{getQuestionText()}</h1>
                <QuizAnswer />
            </div>
        </div>
    );
}
