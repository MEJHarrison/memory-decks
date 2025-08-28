import { Routes, Route } from 'react-router-dom';

import MainMenu from './components/MainMenu';
import QuizSettings from './components/quiz/QuizSettings';
import Quiz from './components/quiz/Quiz';
import QuizResults from './components/quiz/QuizResults';
import ViewStack from './components/ViewStack';

import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/quiz-settings" element={<QuizSettings />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz-results" element={<QuizResults />} />
            <Route path="/view-stack" element={<ViewStack />} />
        </Routes>
    );
}

export default App;
