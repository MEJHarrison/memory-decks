import { useNavigate } from 'react-router-dom';

import { useQuiz } from '../../context/QuizContext';

import Button from '../ui/Button';

export default function QuizResults() {
    const { correctAnswers, answers, numberOfQuestions, resetQuiz } = useQuiz();
    const navigate = useNavigate();

    const handleBackToMenu = () => {
        resetQuiz();

        navigate('/');
    };

    return (
        <div>
            <h1>QuizResults</h1>

            <h2>
                Score: {correctAnswers} / {numberOfQuestions}
            </h2>

            {correctAnswers !== numberOfQuestions && (
                <div>
                    <h2>You got some wrong. Let's review:</h2>
                    {answers
                        .filter((answer) => !answer.isCorrect)
                        .map((answer, index) => (
                            <div key={index}>
                                <h3>{answer.questionText}</h3>
                                <h3>
                                    Question Card: {answer.questionCard.rank} of {answer.questionCard.suit}
                                </h3>
                                <h3>
                                    You answered {answer.selectedAnswer.rank} of {answer.selectedAnswer.suit}.
                                </h3>
                                <h3>
                                    The correct answer was {answer.answerCard.rank} of {answer.answerCard.suit}
                                </h3>
                            </div>
                        ))}
                </div>
            )}

            <div className="m-16 flex flex-col items-center gap-12">
                <Button onClick={handleBackToMenu} route={'/'}>
                    Main Menu
                </Button>
            </div>
        </div>
    );
}
