"use client"
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card";
import styled from "styled-components";

// nosso grid para as imagens ficarem dentro dele
const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px; //espaçamento entre as imagens
    max-width: 100%;

    margin-top: 32px; //espaçamento entre as imagens e os filtros acima(titulos das abas)
`

//vai consumir um hooks que vai retorna os produtos pra ele
export function ProductsList(){

    const { data } = useProducts();
    console.log(data);

    return(
        <ListContainer>
            {data?.map(product => <ProductCard 
            key={product.id}
            title={product.name}
            price={product.price_in_cents}
            image={product.image_url} 
            
            />
            )}
        </ListContainer>
    )
}