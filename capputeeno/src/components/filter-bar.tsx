"use client";

import styled from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

interface FilterBarProps{

}

const FilterContainer = styled.div`
    display: flex;
    width: 100%; //aqui ele ja jogou os links para a esquerda alinhado ao titulo
    align-items: start;
    justify-content: space-between; // joga um item para um lado e outro pro outro lado

`;

export function FilterBar(props: FilterBarProps){
    return(
        <FilterContainer>
            <FilterByType/>
            <FilterByPriority/>
        </FilterContainer>
    )
}