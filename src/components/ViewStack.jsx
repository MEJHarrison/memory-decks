import { useNavigate } from 'react-router-dom';

import deck from '../data/stacks/mnemonica.json';

import Button from './Button';
import CardImage from './CardImage';

export default function FullStack() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-2 p-2">
                {deck.cards.map((card) => (
                    <CardImage key={card.position} card={card} className="w-16 sm:w-32 md:w-40 lg:w-52" />
                ))}
            </div>

            <div className="m-16 flex flex-col items-center gap-12">
                <Button onClick={() => navigate('/')}>Main Menu</Button>
            </div>
        </div>
    );
}
