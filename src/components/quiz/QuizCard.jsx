import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import CardContent from './CardContent.jsx';

export default function QuizCard({ card, isPosition, selectedCard, isCorrect, onClick, questionId }) {
    const isClicked = selectedCard?.position === card.position;
    const isInactive = isPosition && selectedCard && !isClicked;
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="relative w-full rounded-xl">
            <div className="hidden sm:block">
                <motion.button
                    key={`${questionId}-${card.position}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.1 }}
                    animate={{
                        scale: isInactive ? 0.8 : 1,
                        opacity: isInactive ? 0.4 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 500 }}
                    style={{ perspective: 1000 }}
                    onClick={() => onClick(card)}
                    className="relative h-full w-full rounded-xl border-2 border-transparent"
                >
                    <motion.div
                        animate={{
                            rotateY: !isPosition && selectedCard ? (isClicked ? 0 : 180) : 0,
                        }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        style={{ transformStyle: 'preserve-3d' }}
                        className="h-full w-full"
                        onUpdate={(latest) => {
                            // swap front/back at 90 degrees
                            if (!isPosition) {
                                setFlipped(latest.rotateY > 90);
                            }
                        }}
                    >
                        <CardContent card={card} isPosition={isPosition} flipped={flipped} isMobile={false} />
                    </motion.div>

                    {isClicked && (
                        <div
                            className={`absolute inset-0 rounded-xl transition-colors duration-300 ${
                                isCorrect ? 'bg-green-500/30' : 'bg-red-500/30'
                            }`}
                        />
                    )}
                </motion.button>
            </div>

            <div className="sm:hidden">
                <motion.button
                    whileHover={{ scale: 1.16 }}
                    whileTap={{ scale: 1.16 }}
                    animate={{
                        scale: selectedCard && selectedCard.position !== card.position ? 0.8 : 1,
                        opacity: selectedCard && selectedCard.position !== card.position ? 0.4 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 500 }}
                    style={{ perspective: 1000 }}
                    onClick={() => onClick(card)}
                    className="h-full w-full rounded-xl border-2 border-transparent"
                >
                    <CardContent card={card} isPosition={isPosition} flipped={false} isMobile={true} />

                    {isClicked && (
                        <div
                            className={`absolute inset-0 rounded-xl transition-colors duration-300 ${
                                isCorrect ? 'bg-green-500/30' : 'bg-red-500/30'
                            }`}
                        />
                    )}
                </motion.button>
            </div>
        </div>
    );
}
