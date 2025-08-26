import { Link } from 'react-router-dom';

export default function MainMenu() {
    return (
        <div>
            <h1>Memory Decks</h1>
            <Link to="/quiz-settings">Start Quiz</Link>
            {/* <button onClick={() => Navigate('quiz-settings')}>Start Quiz</button> */}
        </div>
    );
}
