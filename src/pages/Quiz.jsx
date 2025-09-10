import { useQuiz } from '../context/QuizContext';

import QuizQuestion from '../components/quiz/QuizQuestion';
//import QuizAnswer from '../components/quiz/QuizAnswer';
import QuizAnswers from '../components/quiz/QuizAnswers';

export default function Quiz() {
    const { getQuestionText } = useQuiz();

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="flex flex-col items-center gap-20">
                <QuizQuestion />
                <h1 className="text-xl font-bold text-emerald-900 drop-shadow-sm">{getQuestionText()}</h1>
                <QuizAnswers />
            </div>
        </div>
    );
}
