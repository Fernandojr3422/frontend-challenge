/*
** 1)VAI SER UTILIZADO TBM PARA atualização o context. 
*/

import { FilterContext } from "@/contexts/filter-context";
import { useContext } from "react";

export function useFilter(){
    return useContext(FilterContext);
}