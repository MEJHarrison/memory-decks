import { useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

import { useQuiz } from '../context/QuizContext';

import Button from '../components/ui/Button';
import InputNumber from '../components/ui/InputNumber';

export default function QuizSettings() {
    const navigate = useNavigate();
    const {
        generateNewQuiz,
        stack,
        setStack,
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
        <div className="flex min-h-screen flex-col items-center justify-start">
            <h1 className="mb-32 text-4xl font-bold">Settings</h1>

            <div className="flex flex-col items-start justify-start gap-4">
                <label className="flex items-center gap-3 text-xl font-bold text-emerald-700">
                    Stack
                    <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 font-normal text-emerald-700">
                            <input
                                type="radio"
                                value="mnemonica"
                                checked={stack === 'mnemonica'}
                                onChange={() => setStack('mnemonica')}
                                className="h-5 w-5 accent-emerald-600"
                            />
                            Mnemonica
                        </label>
                        <label className="flex items-center gap-2 font-normal text-emerald-700">
                            <input
                                type="radio"
                                value="aronson"
                                checked={stack === 'aronson'}
                                onChange={() => setStack('aronson')}
                                className="h-5 w-5 accent-emerald-600"
                            />
                            Aronson
                        </label>
                    </div>
                </label>

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
