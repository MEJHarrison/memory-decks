import CardAbbreviation from './CardAbbreviation';

export default function DisplayCardSymbol({ card }) {
    return (
        <div className="flex h-16 w-32 items-center justify-center">
            <div className="p-1 text-4xl">
                <CardAbbreviation card={card} />
            </div>
        </div>
    );
}
