import { useState } from 'react';
import Question from './components/Question';
// import type { CardType } from './types';
import deck from './assets/stacks/mnemonica.json';

import './App.css';

function App() {
    const [current, setCurrent] = useState(deck.cards[0]);

    // setCurrent(deck.cards[0]);
    const answerCards = [deck.cards[10], deck.cards[1], deck.cards[20], deck.cards[30]];

    function handleAnswer(selected) {
        if (selected.position === current.position + 1) {
            console.log('✅ Correct!');
        } else {
            console.log('❌ Wrong!');
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            {/* <h1>Memory Decks</h1> */}
            <Question questionCard={current} answerCards={answerCards} onAnswer={handleAnswer} />
        </div>
    );
}

export default App;
