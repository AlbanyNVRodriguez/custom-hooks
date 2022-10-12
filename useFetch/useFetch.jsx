import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: false
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        });

        try {
            let res = await fetch(url);

            if(!res.ok) throw {res, status: res.status, statusText: res.statusText};
            
            let data = await res.json();

            setState({
                ...state,
                data,
                isLoading: false
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFetch();
    }, [url]);


    return {
        ...state,
        state
    };
}
