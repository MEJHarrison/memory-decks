import { Routes, Route } from 'react-router-dom';

import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import Results from './components/Results';

import './App.css';
import QuizSettings from './components/QuizSettings';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/quiz-settings" element={<QuizSettings />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
        </Routes>
    );
}

export default App;
