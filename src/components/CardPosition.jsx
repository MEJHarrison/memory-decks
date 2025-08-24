export default function CardPosition({ position }) {
    return (
        <div className="flex justify-center">
            <span
                className={`flex h-52 w-32 items-center justify-center rounded-lg bg-white text-5xl text-black shadow-lg`}
            >
                {position}
            </span>
        </div>
    );
}
