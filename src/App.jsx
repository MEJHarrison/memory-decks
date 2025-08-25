import Question from './components/Question';
import { QuizProvider } from './context/QuizContext';
import './App.css';

function App() {
    return (
        <QuizProvider>
            <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
                <Question />
            </div>
        </QuizProvider>
    );
}

export default App;
