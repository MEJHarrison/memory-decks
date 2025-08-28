export default function DisplayCardPosition({ card, size = 'Large' }) {
    const largeStyle =
        'flex w-40 md:w-44 lg:w-52 aspect-[691/1056] items-center justify-center rounded-lg border-2 border-slate-300 bg-white text-black shadow-lg';

    const smallStyle = 'flex h-16 w-32 items-center justify-center';

    const style = size === 'Large' ? largeStyle : smallStyle;

    return (
        <div className={style}>
            <div className="text-4xl">{card.position}</div>
        </div>
    );
}
