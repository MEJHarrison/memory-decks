import { useNavigate } from 'react-router-dom';

import mnemonica from '../data/stacks/mnemonica.json';
import aronson from '../data/stacks/aronson.json';

import Button from '../components/ui/Button';
import DisplayCardImage from '../components/ui/DisplayCardImage';

import { useQuiz } from '../context/QuizContext';

export default function FullStack() {
    const navigate = useNavigate();
    const { stack } = useQuiz();

    const deck = stack === 'mnemonica' ? mnemonica : aronson;

    return (
        <div>
            <div className="m-16 flex flex-col items-center gap-12">
                <Button onClick={() => navigate('/')}>Main Menu</Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 p-2">
                {deck.cards.map((card) => (
                    <div key={card.position} className="mb-4 text-center">
                        <DisplayCardImage card={card} mode={'Stack'} />
                        <h2 className="text-lg font-bold sm:text-3xl">{card.position}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
