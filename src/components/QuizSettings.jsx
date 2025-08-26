import { useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

export default function QuizSettings() {
    const navigate = useNavigate();
    const { generateNewQuiz, numberOfQuestions, setNumberOfQuestions } = useQuiz();

    function startQuiz() {
        generateNewQuiz();
        navigate('/quiz');
    }

    return (
        <div>
            <h1>Quiz Settings</h1>

            <label>
                Number of Questions
                <input
                    type="number"
                    min="5"
                    max="52"
                    value={numberOfQuestions}
                    onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
                />
            </label>

            <button onClick={startQuiz}>Start Quiz</button>
        </div>
    );
}
