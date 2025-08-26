import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { generateQuiz } from '../utils/quizGenerator';

function noop() {}

const QuizContext = createContext({
    quiz: [],
    generateNewQuiz: noop,
    resetQuit: noop,
    getCurrentQuestion: noop,
    getQuestionText: noop,
    onAnswer: noop,
    numberOfQuestions: 10,
    setNumberOfQuestions: noop,
    currentQuestionIndex: 0,
    correctAnswers: 0,
    answers: [],
});

export function QuizProvider({ children }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState(() => generateQuiz(10));

    useEffect(() => {
        if (currentQuestionIndex >= quiz.length && quiz.length > 0) {
            navigate('/results');
        }
    }, [currentQuestionIndex, quiz, navigate]);

    function resetState() {
        setCorrectAnswers(0);
        setAnswers([]);
        setCurrentQuestionIndex(0);
    }

    function resetQuiz() {
        resetState();

        setQuiz([]);
    }

    function generateNewQuiz() {
        resetState();
        console.log('numberOfQuestions', numberOfQuestions);

        setQuiz(generateQuiz(numberOfQuestions));
    }

    function getCurrentQuestion() {
        return quiz[currentQuestionIndex];
    }

    function getQuestionText() {
        const currentQuestion = getCurrentQuestion();

        if (!currentQuestion) return '';

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

    function handleAnswer(selectedCard) {
        const questionText = getQuestionText();
        const answerCard = getCurrentQuestion().answerCard;
        const isCorrect = selectedCard.position === answerCard.position;

        if (isCorrect) {
            setCorrectAnswers((prev) => prev + 1);
        }

        setAnswers((prev) => [...prev, { questionText, selectedCard, answerCard, isCorrect }]);

        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }

    function handleFinish() {
        navigate('/results');
    }

    const ctxValue = {
        quiz: quiz,
        generateNewQuiz,
        resetQuiz,
        getQuestionText,
        getCurrentQuestion,
        onAnswer: handleAnswer,
        numberOfQuestions,
        setNumberOfQuestions,
        currentQuestionIndex,
        correctAnswers,
        answers,
    };

    return <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>;
}

export const useQuiz = () => {
    return useContext(QuizContext);
};
