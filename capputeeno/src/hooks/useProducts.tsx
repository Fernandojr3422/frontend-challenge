/*
** 1) Para fazer a busca de nossos produtos, a requisição pro backend, agente vai usar o axios,
** E o Tang Security, para fazer o cache e manuxeio dessa requisição tbm
** vamos usar o axios e tanstack para fazer o hooks buscar os dados no backend;
** 2) fetcher: Função que vai bater na API de fato;
** 3) QueryKey : chave que vamos passar para identificar a função;
** 4) todas as requisições para uma API GraphiQL, são funções POST;
** 5) useQuery({função que ele vai chamar para fazer as buscas dos dados , para ele conseguir 
** salvar um cache da requisição;
** 6) data?.data?.data?.allProducts:Como a Promisse do Axios retorna um data Generico
** foi necessario declarar desta forma , pois queremos direto apenas a lista de produtos
*/

import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { mountQuery } from "@/utils/graphql-filters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string; //assim digo q e string

//função buscador, que usa o axios
const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL, { query })
}

//useDeferredValue: Eu nao quero ficar atualizando meus valores a cada tecla que o user digitar
export function useProducts(){
    const {type, priority, search} = useFilter()
    const searchDeferred = useDeferredValue(search)
    const query = mountQuery(type, priority) //montar a query
    const { data } = useQuery({
        queryFn: () =>  fetcher(query),
        queryKey: ['products', type, priority] //ao clicar na aba ele exibi a lista de camisa ou canela
    })

    const products = data?.data?.data?.allProducts
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))

    return {
        data: filteredProducts //acessaremos a lista de produtos direto
    }
}

//continuar
