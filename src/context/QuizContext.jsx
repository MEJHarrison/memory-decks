import { createContext, useContext, useState } from 'react';

import { generateQuiz } from '../utils/quizGenerator';

const QuizContext = createContext({
    quiz: [],
    currentQuestionIndex: 0,
    getCurrentQuestion: () => {},
    getQuestionText: () => {},
    onAnswer: () => {},
});

export function QuizProvider({ children }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [quiz] = useState(() => generateQuiz(10));

    function getCurrentQuestion() {
        return quiz[currentQuestionIndex];
    }

    function getQuestionText() {
        const currentQuestion = getCurrentQuestion();

        switch (currentQuestion.type) {
            case 'nextCard':
                return 'What is the next card?';
            case 'previousCard':
                return 'What is the previous card?';
            case 'positionOfCard':
                return 'What is the position of this card?';
            case 'cardAtPosition':
                return 'Which card is at this position?';
        }
    }

    function handleAnswer(selected) {
        if (selected.position === getCurrentQuestion().answerCard.position) {
            console.log('✅ Correct!');
        } else {
            console.log('❌ Wrong!');
        }

        setCurrentQuestionIndex((prevIndex) => {
            if (prevIndex + 1 < quiz.length) {
                return prevIndex + 1;
            } else {
                console.log('Quiz Complete');
                return prevIndex;
            }
        });
    }

    const ctxValue = {
        quiz: quiz,
        currentQuestionIndex,
        getQuestionText: getQuestionText,
        getCurrentQuestion: getCurrentQuestion,
        onAnswer: handleAnswer,
    };

    return <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
    return useContext(QuizContext);
}
