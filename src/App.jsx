import { Routes, Route } from 'react-router-dom';

import MainMenu from './pages/MainMenu';
import Quiz from './pages/Quiz';
import QuizResults from './pages/QuizResults';
import ViewStack from './pages/ViewStack';
import Settings from './pages/Settings';

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
