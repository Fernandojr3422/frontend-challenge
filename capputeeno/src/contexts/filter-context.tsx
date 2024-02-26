//context que vai salvar os valores do filtro
"use client"
import { FilterType} from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityTypes.NEWS,
    setPriority: (value: PriorityTypes) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
}) 

//componenetes que vai estar envoltos por este provider
interface ProviderProps{
    children: ReactNode
}

//criação do provider para o novo context
export function FilterContextProvider({children}: ProviderProps){
    //criação do estado que vai salvar o valor do objeto
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityTypes.POPULARITY)

    return(
        <FilterContext.Provider 
        value={{
            search, 
            page, type, 
            setSearch, 
            setType, 
            setPage,
            priority,
            setPriority
        }}>
        {children}
    </FilterContext.Provider>
)
}