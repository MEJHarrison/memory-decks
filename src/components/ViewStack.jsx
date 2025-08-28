import { useNavigate } from 'react-router-dom';

import deck from '../data/stacks/mnemonica.json';

import Button from './ui/Button';
import DisplayCardImage from './ui/DisplayCardImage';

export default function FullStack() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-2 p-2">
                {deck.cards.map((card) => (
                    <div key={card.position} className="mb-4 text-center">
                        <DisplayCardImage card={card} mode={'Stack'} />
                        <h2 className="text-lg font-bold md:text-3xl">{card.position}</h2>
                    </div>
                ))}
            </div>

            <div className="m-16 flex flex-col items-center gap-12">
                <Button onClick={() => navigate('/')}>Main Menu</Button>
            </div>
        </div>
    );
}
