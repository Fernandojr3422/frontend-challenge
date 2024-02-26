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

const API_URL = process.env.NEXT_PUBLIC_API_URL as string; //assim digo q e string

//função buscador, que usa o axios
const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(
        API_URL,
        {
            query: `query {
                        allProducts{
                        id
                        name
                        price_in_cents,
                        image_url
                        }
                    }
            `
        })
}

export function useProducts(){
    const { data } = useQuery({
        queryFn:  fetcher,
        queryKey: ['products']
    
    })
    return {
        data: data?.data?.data?.allProducts //acessaremos a lista de produtos direto
    }
}

//continuar
