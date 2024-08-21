import { createContext, type ReactNode } from "react";
import { api } from "../utils/api";
import { Product, type User } from "@prisma/client";

const UserDataContext = createContext({} as User);

const UserDataProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: userData,
    isLoading,
    isError,
  } = api.userData.getUserData.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <UserDataContext.Provider value={userData!}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext, UserDataProvider };

const ProductsContext = createContext([] as Product[]);

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: products,
    isLoading,
    isError,
  } = api.products.getAllProducts.useQuery();

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
