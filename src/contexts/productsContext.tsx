import { createContext, type ReactNode } from "react";
import { api } from "../utils/api";
import { type Product } from "@prisma/client";

const ProductsContext = createContext([] as Product[]);

type ProductsProviderProps = {
  children: ReactNode;
  characterId: string;
};

const ProductsProvider = ({ children, characterId }: ProductsProviderProps) => {
  const {
    data: products,
    isLoading,
    isError,
  } = api.products.getAllProducts.useQuery({ characterId });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <ProductsContext.Provider value={products!}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
