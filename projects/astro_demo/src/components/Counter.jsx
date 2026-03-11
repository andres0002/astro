import { useState } from "preact/hooks";

export function Counter () {
    const [counter, setCounter] = useState(0);

    return (
        <div class="text-center">
            <span class="text-blue-300 text-bold text-6xl">{counter}</span>
            <div class="text-center">
                <button class="boder px-4 py-2 text-6xl text-green-400 text-bold" onClick={() => setCounter(counter => counter + 1)}>+</button>
                <button class="boder px-4 py-2 text-6xl text-red-400 text-bold" onClick={() => setCounter(counter => counter - 1)}>-</button>
            </div>
        </div>
    )
}