import { useState } from "react"

export const useLocalStorage = (name, defaultValue) => {
    const [state, setState] = useState(() => {
        return JSON.parse(window.localStorage.getItem(name)) || defaultValue;
    });

    const setValue = (value) => {
        console.log('value:', value);
        window.localStorage.setItem(name, JSON.stringify(value));
        setState(value);
    };

    return [state, setValue];
}
