import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: false
    });

    const getFetch = async () =>{
        setState({
            ...state,
            isLoading: true
        });

        let res = await fetch(url),
        data = await res.json();

        setState({
            ...state,
            data,
            isLoading: false
        });
    }

    useEffect(() => {
        getFetch();
    }, [url])


    return {
        ...state
    };
}
