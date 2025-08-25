// export default function CardPosition({ card, size = 'Large' }) {
//     let style = '';

//     if (size === 'Large') {
//         style =
//             'flex h-52 w-32 items-center justify-center rounded-lg border-2 border-slate-300 bg-white text-black shadow-lg';
//     } else {
//         style = 'flex h-16 w-36 items-center justify-center';
//     }

//     return (
//         <div className={style}>
//             <div className="p-1 text-4xl">{card.position}</div>
//         </div>
//     );
// }

export default function CardPosition({ card, size = 'Large' }) {
    let style = '';

    if (size === 'Large') {
        style =
            'flex h-52 w-32 items-center justify-center rounded-lg border-2 border-slate-300 bg-white text-black shadow-lg';
    } else {
        style = 'flex h-16 w-32 items-center justify-center rounded-lg bg-white text-black shadow-md';
    }

    return (
        <div className={style}>
            <div className={size === 'Large' ? 'text-4xl' : 'text-2xl'}>{card.position}</div>
        </div>
    );
}
