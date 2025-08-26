import { useNavigate } from 'react-router-dom';

import { useQuiz } from '../context/QuizContext';

export default function Results() {
    const { correctAnswers, answers, numberOfQuestions, resetQuiz } = useQuiz();
    const navigate = useNavigate();

    const handleBackToMenu = () => {
        resetQuiz();

        navigate('/');
    };

    return (
        <div>
            <h1>Results</h1>

            <h2>
                Score: {correctAnswers} / {numberOfQuestions}
            </h2>

            <button onClick={handleBackToMenu}>Main Menu</button>
        </div>
    );
}
