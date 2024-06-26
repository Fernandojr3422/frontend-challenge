//ele vai consultar uma propriedade no localStorage, vai salvar a propriedade no estado

import { useEffect, useState } from "react";

//e vai disponibilizar esse estado para o componenete que quizer utiliza-lo
export function useLocalStorage<T>(item: string, initialValue: T){
    const [value, setValue] = useState<T>(initialValue)

    useEffect(() => {
        if (typeof window === 'undefined') return;
        let value = localStorage.getItem(item)
        if(value) setValue(JSON.parse(value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[window])

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item,JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}