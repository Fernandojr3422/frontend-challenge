import styled from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";


export const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px ;
  padding: 10px 16px;
  border: none;

  background-color: var(--bg-secondary);
  
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color  : var(--text-dark);

`;

//ele que define o input de fato
 const InputContainer = styled.div`
   //configuração para tamanho default
   position: relative;
   width: 250px; //posso mexe no icone pra onde quizer

   svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
   }

   //configuraçaõa para telas maiores
   @media(min-width: 768px){
    width: 352px; //posso mexe no icone pra onde quizer
 
   }
   
 `;

 //extends InputHTMLAttribute => Possui todas as caracteristicas de um input(value,placeholder..)
 interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string,
  handleChange: (value: string ) => void
}

export function PrimaryInputWSearchIcon(props: InputProps){
  return (
      <InputContainer>
          <PrimaryInput 
              onChange={(event) => props.handleChange(event.target.value)} 
              {...props}
          />
          <SearchIcon/>
      </InputContainer>
  )
}




