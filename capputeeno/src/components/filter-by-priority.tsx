import { styled } from "styled-components"
import { ArrowIcon } from "./icons/arrow-icon";
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityTypes } from "@/types/priority-types";

//e o container para o organizador da tela
const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        border: none;
        background: transparent;
        cursor: pointer;

        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-left: 16px;
        }
    }
`

const PriorityFilter = styled.ul`
    position: absolute;
    width: 250px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;

    list-style: none;

    top: 100%;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    //apartir do segundo
    li + li {
        margin-top: 4px;
    }
`

export function FilterByPriority(){
    const [isOpen, setIsOpen] = useState(false)
    //para ele mudar o valor do filtro
    const { setPriority } = useFilter()

    //qdo tiver aberto ele fecha, qdo tiver fechado ele abre
    const handleOpen = () => setIsOpen(prev => !prev)

    //atualizar a prioridade do filtro
    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
        //depois que atualizou isto aqui fechar o card do organizador
        setIsOpen(false)
    }

    return(
        <FilterContainer>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon/>
            </button>
            {isOpen && 
            <PriorityFilter>
                <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
            </PriorityFilter>
        }
        </FilterContainer>
    )
}