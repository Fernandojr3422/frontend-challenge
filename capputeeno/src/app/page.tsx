"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//<QueryClientProvider: Para que todos os componenetes que estejam entorno desse componnente 
//tenham acesso ao cache da aplicação

export default function Home() {
  const client = new QueryClient();
  return (

    

    <QueryClientProvider client={client}>
      <main className={styles.main}>
      <FilterBar/>
      <ProductsList/>
    </main>
    </QueryClientProvider>
    
  );
}
