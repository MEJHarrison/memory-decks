import { Routes, Route } from 'react-router-dom';

import MainMenu from './components/MainMenu';
import Quiz from './components/quiz/Quiz';
import QuizResults from './components/quiz/QuizResults';
import ViewStack from './components/ViewStack';
import Settings from './components/Settings';

import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz-results" element={<QuizResults />} />
            <Route path="/view-stack" element={<ViewStack />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
}

export default App;
