/*
** 1) Aqui dentro tbm vamos fazer a atualização do context. 
** para fazer isso vamos tr que consumir o context e atualizar o valor la dentro dele
*/
"use client";

import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import styled from "styled-components"

interface FilterByTypeProps{

}

interface FilterItemProps{
    selected: boolean;
}

//uma lista
const FilterList = styled.ul`
      display: flex;
      align-items: center;
      justify-content: center;
      gap:40px;
      list-style: none; // retirar os pontos das ul's
`;

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer; //pra exibir a mao simbolizando q vai clicar

    color: var(--text-dark);

    //aqui seá usado para definir se tenho uma borda ou não
    //border-bottom: {props => props.selected ? 'Se tiver selecionado' : 'caso contrario}
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};

`

export function FilterByType(){
    const {type, setType} = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value);
    }

    return(
        <FilterList>
            <FilterItem 
                selected = {type === FilterType.ALL} 
                onClick={() => handleChangeType(FilterType.ALL)}>Todos os Produtos</FilterItem>

            <FilterItem 
                selected={type === FilterType.SHIRT} 
                onClick={()=> handleChangeType(FilterType.SHIRT)}>Camisetas</FilterItem>
            
            <FilterItem 
                selected= {type === FilterType.MUG} 
                onClick={() => handleChangeType(FilterType.MUG)}>Canecas</FilterItem>
        </FilterList>
    )
}