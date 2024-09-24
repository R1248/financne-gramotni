import { useContext, useState, type FC } from "react";
import Headbar from "./headbar";
import { ChracatersContext } from "~/contexts/charactersContext";
import { api } from "~/utils/api";

const largestCities = [
  "Praha",
  "Brno",
  "Ostrava",
  "Plzeň",
  "Liberec",
  "Olomouc",
  "České Budějovice",
  "Hradec Králové",
  "Pardubice",
  "Ústí nad Labem",
  "Zlín",
  "Havířov",
  "Kladno",
  "Most",
  "Opava",
  "Jihlava",
  "Frýdek-Místek",
  "Teplice",
  "Karviná",
  "Karlovy Vary",
  "Chomutov",
  "Děčín",
  "Mladá Boleslav",
  "Jablonec nad Nisou",
  "Prostějov",
  "Přerov",
  "Česká Lípa",
  "Třebíč",
  "Tábor",
  "Třinec",
  "Znojmo",
  "Kolín",
  "Příbram",
  "Cheb",
  "Písek",
];

type CharactersMenuProps = {
  router: string;
  setRouter: (router: string) => void;
  setSelectedCharacterId: (characterId: string) => void;
};

const CharactersMenu: FC<CharactersMenuProps> = ({
  router,
  setRouter,
  setSelectedCharacterId,
}) => {
  const characters = useContext(ChracatersContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCharacterName, setNewCharacterName] = useState("");
  const { mutate: createCharacter } =
    api.characters.createCharacter.useMutation();

  const utils = api.useUtils();

  const handleCreateCharacter = () => {
    createCharacter(
      {
        name: newCharacterName,
        residence: largestCities[Math.floor(Math.random() * 35)]!,
      },
      {
        onSuccess: (newCharacter) => {
          // Assume `newCharacter` contains the new character's details including ID
          const createdCharacterId = newCharacter.id;

          // Invalidate the characters cache
          void utils.characters.getAllCharacters.invalidate();
          void utils.characters.getSelectedCharacter.invalidate({
            characterId: createdCharacterId,
          });

          // Set the selected character ID to the newly created character
          setSelectedCharacterId(createdCharacterId);

          // Close the modal and navigate to the game
          setIsModalOpen(false);
          setRouter("game");
        },
      },
    );
  };

  const [startIndex, setStartIndex] = useState(0);
  const visibleCharacters = 5; // Maximum number of characters visible at once

  const handlePrevCharacter = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleNextCharacter = () => {
    if (startIndex + visibleCharacters < characters.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <Headbar router={router} setRouter={setRouter} />
      <hr className="w-full bg-white" />

      <div className="my-3 flex w-full flex-grow">
        <div className="relative flex h-auto flex-grow overflow-hidden rounded-2xl bg-white p-20">
          {/* Map through characters */}
          <div className="relative flex w-full flex-col items-center">
            <h2 className="mb-2 mt-8 text-center text-2xl font-bold">
              Characters
            </h2>

            {/* Character List with Scrolling */}
            <div className="flex items-center justify-center">
              {/* Left Arrow */}
              <button
                className={`text-4xl ${startIndex === 0 ? "text-gray-300" : "cursor-pointer"}`}
                onClick={handlePrevCharacter}
              >
                ←
              </button>

              {/* Scrollable Character List */}
              <div className="flex flex-row space-x-4 overflow-hidden">
                {/* Create New Character Button */}
                <button
                  className="h-64 w-48 cursor-pointer rounded-lg bg-blue-500 p-4 text-white hover:bg-blue-600"
                  onClick={() => setIsModalOpen(true)}
                  style={{ flexShrink: 0 }}
                >
                  Create New Character
                </button>

                {/* Map through characters, limit to visibleCharacters */}
                {characters
                  .slice(startIndex, startIndex + visibleCharacters)
                  .map((character) => (
                    <button
                      key={character.id}
                      className="h-64 w-48 cursor-pointer rounded-lg bg-gray-200 p-4 hover:bg-gray-300"
                      onClick={() => {
                        setSelectedCharacterId(character.id);
                        setRouter("game");
                      }}
                    >
                      {character.name}
                    </button>
                  ))}
              </div>

              {/* Right Arrow */}
              <button
                className={`text-4xl ${
                  startIndex + visibleCharacters >= characters.length
                    ? "text-gray-300"
                    : "cursor-pointer"
                }`}
                onClick={handleNextCharacter}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for creating a new character */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-6">
            <h2 className="mb-4 text-lg font-bold">Create New Character</h2>
            <input
              type="text"
              placeholder="Enter character name"
              value={newCharacterName}
              onChange={(e) => setNewCharacterName(e.target.value)}
              className="mb-4 w-full border p-2"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="rounded bg-gray-300 p-2 text-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="rounded bg-blue-500 p-2 text-white"
                onClick={handleCreateCharacter}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      <hr className="mt-auto w-full bg-white" />
    </>
  );
};

export default CharactersMenu;
