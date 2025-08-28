import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { generateQuiz } from '../utils/quizGenerator';

function noop() {}

const QuizContext = createContext({
    quiz: [],
    generateNewQuiz: noop,
    resetQuiz: noop,
    getCurrentQuestion: noop,
    getQuestionText: noop,
    onAnswer: noop,
    stack: 'mnemonica',
    setStack: noop,
    numberOfQuestions: 10,
    setNumberOfQuestions: noop,
    minimumCard: 1,
    setMinimumCard: noop,
    maximumCard: 52,
    setMaximumCard: noop,
    currentQuestionIndex: 0,
    correctAnswers: 0,
    answers: [],
});

export function QuizProvider({ children }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);
    const [minimumCard, setMinimumCard] = useState(1);
    const [maximumCard, setMaximumCard] = useState(52);
    const [answers, setAnswers] = useState([]);
    const [stack, setStack] = useState('mnemonica');
    const [quiz, setQuiz] = useState(() => generateQuiz(10, 1, 52, stack));

    const navigate = useNavigate();

    useEffect(() => {
        if (currentQuestionIndex >= quiz.length && quiz.length > 0) {
            navigate('/quiz-results');
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

        setQuiz(generateQuiz(numberOfQuestions, minimumCard, maximumCard, stack));
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

    function handleAnswer(selectedAnswer) {
        const questionText = getQuestionText();
        const currentQuestion = getCurrentQuestion();
        const questionCard = currentQuestion.questionCard;
        const answerCard = currentQuestion.answerCard;
        const isCorrect = selectedAnswer.position === answerCard.position;
        const type = currentQuestion.type;

        if (isCorrect) {
            setCorrectAnswers((prev) => prev + 1);
        }

        setAnswers((prev) => [...prev, { questionText, questionCard, answerCard, selectedAnswer, isCorrect, type }]);

        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }

    function handleFinish() {
        navigate('/quiz-results');
    }

    const ctxValue = {
        quiz: quiz,
        generateNewQuiz,
        resetQuiz,
        getQuestionText,
        getCurrentQuestion,
        onAnswer: handleAnswer,
        stack,
        setStack,
        numberOfQuestions,
        setNumberOfQuestions,
        minimumCard,
        setMinimumCard,
        maximumCard,
        setMaximumCard,
        currentQuestionIndex,
        correctAnswers,
        answers,
    };

    return <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>;
}

export const useQuiz = () => {
    return useContext(QuizContext);
};
