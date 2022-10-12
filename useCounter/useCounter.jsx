import { useState } from "react"

export const useCounter = (value = 10) => {

    const [counter, setCounter] = useState(value);

    const add = (value = 1) => setCounter(current => current + value);
    const subtract = (value = 1) => setCounter(current => current - value);
    const reset = () => setCounter(value);

    return {
        setCounter,
        counter,
        add,
        subtract,
        reset
    }
}
