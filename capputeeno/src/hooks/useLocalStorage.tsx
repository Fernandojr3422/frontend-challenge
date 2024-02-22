//ele vai consultar uma propriedade no localStorage, vai salvar a propriedade no estado

import { useState } from "react";

//e vai disponibilizar esse estado para o componenete que quizer utiliza-lo
export function useLocalStorage<T>(item: string){
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(item) ?? ''));
  //  const [value, setValue] = useState<T>(initialValue)

    //qdo a pessoa quiser atualizar o valor do estado
    const updateLocalStorage = (newValue: T) =>{
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    }

    return{
        value,
        updateLocalStorage
    }
}