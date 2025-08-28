import { useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useQuiz } from '../../context/QuizContext';

import Button from '../ui/Button';
import InputNumber from '../ui/InputNumber';

export default function QuizSettings() {
    const navigate = useNavigate();
    const {
        generateNewQuiz,
        numberOfQuestions,
        setNumberOfQuestions,
        minimumCard,
        setMinimumCard,
        maximumCard,
        setMaximumCard,
    } = useQuiz();

    function startQuiz() {
        generateNewQuiz();
        navigate('/quiz');
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-start p-8">
            <h1 className="mb-32 text-4xl font-bold">Quiz Settings</h1>

            <div className="flex flex-col items-start justify-start gap-4">
                <InputNumber
                    labelText={'Number of Questions'}
                    minValue={'5'}
                    maxValue={'52'}
                    value={numberOfQuestions}
                    setValue={setNumberOfQuestions}
                />

                <InputNumber
                    labelText={'Minimum Card'}
                    minValue={'1'}
                    maxValue={maximumCard - 1}
                    value={minimumCard}
                    setValue={setMinimumCard}
                />

                <InputNumber
                    labelText={'Maximum Card'}
                    minValue={minimumCard + 1}
                    maxValue={'52'}
                    value={maximumCard}
                    setValue={setMaximumCard}
                />
            </div>

            <div className="m-16 flex flex-col items-center gap-12">
                <Button onClick={startQuiz}>Start Quiz</Button>
                <Button onClick={() => navigate('/')}>Main Menu</Button>
            </div>
        </div>
    );
}
