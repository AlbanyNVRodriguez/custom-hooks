import { useState } from "react"

export const useCounter = (value = 10) => {

    const [counter, setCounter] = useState(value);

    const increase = (v = 1) => setCounter(current => current + v);
    const decrease = (v = 1) => setCounter(current => current - v);
    const reset = () => setCounter(v);

    return {
        setCounter,
        counter,
        increase,
        decrease,
        reset
    }
}
