import { useNavigate } from 'react-router-dom';

import Button from './ui/Button';

export default function MainMenu() {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen flex-col items-center gap-12 p-8">
            <h1 className="mt-8 text-5xl font-bold tracking-wide text-emerald-800 drop-shadow md:mt-12">My Quiz App</h1>

            <div className="mt-12 flex flex-col items-center gap-8 md:mt-16 md:gap-12">
                <Button onClick={() => navigate('/quiz-settings')}>Start Quiz</Button>
                <Button onClick={() => navigate('/view-stack')}>View Stack</Button>
                {/* <Button onClick={() => navigate('/settings')}>Settings</Button> */}
            </div>
        </div>
    );
}
