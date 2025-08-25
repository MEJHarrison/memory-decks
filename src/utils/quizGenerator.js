import deck from '../data/stacks/mnemonica.json';

function shuffleArray(array) {
    const newArray = [...array];

    for (let index = newArray.length - 1; index > 0; index--) {
        const index2 = Math.floor(Math.random() * (index + 1));

        [newArray[index], newArray[index2]] = [newArray[index2], newArray[index]];
    }

    return newArray;
}

function generateQuestion(type, index) {
    const cards = deck.cards;
    const questionCard = cards[index];
    let answerCard = undefined;
    const exclude = new Set();

    switch (type) {
        case 'nextCard':
            answerCard = cards[(index + 1) % cards.length];
            exclude.add(questionCard).add(answerCard);

            break;
        case 'previousCard':
            answerCard = cards[(index - 1 + cards.length) % cards.length];
            exclude.add(questionCard).add(answerCard);

            break;
        case 'positionOfCard':
        case 'cardAtPosition':
            answerCard = questionCard;
            exclude.add(answerCard);

            break;
        default:
            throw new Error(`Unknown question type: ${type}`);
    }

    const wrongAnswers = shuffleArray(cards.filter((card) => !exclude.has(card))).slice(0, 3);

    return {
        id: crypto.randomUUID(),
        type,
        questionCard,
        answerCard,
        answerCards: shuffleArray([answerCard, ...wrongAnswers]),
    };
}

export function generateQuiz(numQuestions = 10) {
    const types = ['nextCard', 'previousCard', 'positionOfCard', 'cardAtPosition'];

    const questions = [];

    for (let index = 0; index < numQuestions; index++) {
        const type = types[Math.floor(Math.random() * types.length)];
        const cardIndex = Math.floor(Math.random() * deck.cards.length);

        questions.push(generateQuestion(type, cardIndex));
    }

    return questions;
}
