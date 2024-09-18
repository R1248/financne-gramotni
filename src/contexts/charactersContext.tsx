import { createContext, type ReactNode } from "react";
import { api } from "../utils/api";
import { type Character } from "@prisma/client";

const ChracatersContext = createContext([] as Character[]);

const CharactersProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: characters,
    isLoading,
    isError,
  } = api.characters.getAllCharacters.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <ChracatersContext.Provider value={characters!}>
      {children}
    </ChracatersContext.Provider>
  );
};

export { ChracatersContext, CharactersProvider };

const CharacterContext = createContext({} as Character);

type CharacterProviderProps = {
  characterId: string;
  children: ReactNode;
};

const CharacterProvider = ({
  characterId,
  children,
}: CharacterProviderProps) => {
  const {
    data: character,
    isLoading,
    isError,
  } = api.characters.getSelectedCharacter.useQuery({ id: characterId });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <CharacterContext.Provider value={character!}>
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterContext, CharacterProvider };
