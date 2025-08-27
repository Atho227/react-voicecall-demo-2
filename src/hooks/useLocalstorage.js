// hooks/useLocalStorage.js
import { useState } from "react";
import { getLocalstorage, setLocalstorage } from "../ultils/mainUltils";

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => getLocalstorage(key, initialValue));

    const updateValue = (newValue) => {
        setValue(newValue);
        setLocalstorage(key, newValue);
    };

    return [value, updateValue];
};
