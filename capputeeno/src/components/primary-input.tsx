import styled from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";


export const PrimaryInput = styled.input`
  width: 352px;
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

 const InputContainer = styled.div`
   
   position: relative;
   width: 352px; //posso mexe no icone pra onde quizer

   svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
   }
   
 `;

 //extends InputHTMLAttribute => Possui todas as caracteristicas de um input(value,placeholder..)

 interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

 export function PrimaryInputWSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <PrimaryInput {...props} />
            <SearchIcon/>
        </InputContainer>
    )
 }




