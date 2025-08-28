export default function Button({ onClick, children }) {
    const buttonStyle =
        'w-48 transform rounded-lg border border-gray-300 bg-white px-6 py-3 text-center text-2xl shadow-md transition duration-200 ease-in-out hover:scale-105 hover:bg-emerald-700 hover:text-white hover:shadow-lg active:scale-95 active:shadow-inner';

    return (
        <button onClick={onClick} className={buttonStyle}>
            {children}
        </button>
    );
}
