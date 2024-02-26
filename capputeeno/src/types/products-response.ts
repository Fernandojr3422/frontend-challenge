import { Product } from "./product"

export interface ProductsFetchResponse{
    //objeto
    data: {
        allProducts: Product[];
    }
}