import { useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useQuiz } from '../../context/QuizContext';

import Button from '../ui/Button';

export default function QuizSettings() {
    const navigate = useNavigate();
    const { generateNewQuiz, numberOfQuestions, setNumberOfQuestions } = useQuiz();

    function startQuiz() {
        generateNewQuiz();
        navigate('/quiz');
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-start p-8">
            <h1 className="mb-32 text-4xl font-bold">Quiz Settings</h1>

            <label>
                Number of Questions
                <input
                    type="number"
                    min="5"
                    max="52"
                    value={numberOfQuestions}
                    onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
                    onBlur={() => {
                        if (numberOfQuestions < 5) setNumberOfQuestions(5);
                        if (numberOfQuestions > 52) setNumberOfQuestions(52);
                    }}
                    className="w-20 rounded border bg-emerald-200 px-3 py-2 text-center text-lg shadow focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
            </label>

            <div className="m-16 flex flex-col items-center gap-12">
                <Button onClick={startQuiz}>Start Quiz</Button>
                <Button onClick={() => navigate('/')}>Main Menu</Button>
            </div>
        </div>
    );
}
