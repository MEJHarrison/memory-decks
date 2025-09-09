import { useNavigate } from 'react-router-dom';

import { useQuiz } from '../context/QuizContext';
import CardAbbreviation from '../components/ui/CardAbbreviation';

import Button from '../components/ui/Button';

export default function QuizResults() {
    const { correctAnswers, answers, numberOfQuestions, resetQuiz } = useQuiz();
    const navigate = useNavigate();

    const handleBackToMenu = () => {
        resetQuiz();

        navigate('/');
    };

    return (
        <div className="flex min-h-screen flex-col items-center gap-8 p-8">
            <h1 className="mt-8 text-5xl font-bold tracking-wide text-emerald-800 drop-shadow md:mt-12">QuizResults</h1>

            <h2 className="text-3xl font-bold text-emerald-700">
                Score: {correctAnswers} / {numberOfQuestions}
            </h2>

            {correctAnswers !== numberOfQuestions && (
                <div>
                    <h2 className="text-xl font-bold text-emerald-700">You got some wrong.</h2>

                    {answers
                        .filter((answer) => !answer.isCorrect)
                        .map((answer, index) => (
                            <div key={index} className="mt-6">
                                <h3 className="text-lg text-emerald-600">
                                    Card:{' '}
                                    {answer.type === 'cardAtPosition' ? (
                                        <>{answer.questionCard.position}</>
                                    ) : (
                                        <CardAbbreviation card={answer.questionCard} />
                                    )}
                                </h3>
                                <h3 className="text-lg text-emerald-600">{answer.questionText}</h3>
                                <h3 className="text-lg text-emerald-600">
                                    The correct answer was{' '}
                                    {answer.type === 'positionOfCard' ? (
                                        <>{answer.answerCard.position}</>
                                    ) : (
                                        <CardAbbreviation card={answer.answerCard} />
                                    )}
                                    , but you answered{' '}
                                    {answer.type === 'positionOfCard' ? (
                                        <>{answer.selectedAnswer.position}</>
                                    ) : (
                                        <CardAbbreviation card={answer.selectedAnswer} />
                                    )}
                                    .
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
