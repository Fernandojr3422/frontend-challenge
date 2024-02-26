"use client"
import { useProducts } from "@/hooks/useProducts"

// eke vai consumir o hooks list
interface ProductsListProps{

}

//vai consumir um hooks que vai retorna os produtos pra ele
export function ProductsList(props:ProductsListProps){

    const { data } = useProducts();
    console.log(data);

    return(
        <div>
            <h1>Produtos</h1>
        </div>
    )
}