import { createContext, type ReactNode } from "react";
import { api } from "../utils/api";
import { type Property } from "@prisma/client";

const PropertyContext = createContext([] as Property[]);

type PropertyProviderProps = {
  children: ReactNode;
  characterId: string;
};

const PropertyProvider = ({ children, characterId }: PropertyProviderProps) => {
  const {
    data: properties,
    isLoading,
    isError,
  } = api.property.getAllProperties.useQuery({ characterId });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <PropertyContext.Provider value={properties!}>
      {children}
    </PropertyContext.Provider>
  );
};

export { PropertyContext, PropertyProvider };
