export default function InputNumber({ labelText, minValue, maxValue, value, setValue }) {
    return (
        <label className="flex items-center gap-3 text-xl font-bold text-emerald-700">
            {labelText}
            <input
                type="number"
                min={minValue}
                max={maxValue}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                onBlur={() => {
                    if (value < { minValue }) setValue({ minValue });
                    if (value > { maxValue }) setValue({ maxValue });
                }}
                className="w-12 rounded border bg-emerald-200 text-center text-lg shadow focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
        </label>
    );
}
