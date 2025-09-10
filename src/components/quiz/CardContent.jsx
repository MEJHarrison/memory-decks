import DisplayCardImage from '../ui/DisplayCardImage';
import DisplayCardSymbol from '../ui/DisplayCardSymbol';
import DisplayCardPosition from '../ui/DisplayCardPosition';

export default function CardContent({ card, isPosition, flipped, isMobile }) {
    if (isMobile) {
        return (
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-white p-3 shadow-md sm:hidden">
                {isPosition ? <DisplayCardPosition card={card} size="Small" /> : <DisplayCardSymbol card={card} />}
            </div>
        );
    }

    return (
        <div className="relative aspect-[691/1056] w-40 md:w-44 lg:w-52">
            {isPosition ? (
                <DisplayCardPosition card={card} />
            ) : flipped ? (
                <img
                    src="/cards/yellow_back.png"
                    alt="Back of card"
                    className="h-full w-full rounded-xl object-contain shadow-md"
                />
            ) : (
                <DisplayCardImage card={card} mode="Quiz" />
            )}
        </div>
    );
}
