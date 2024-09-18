import { useContext, useState, type FC } from "react";
import Headbar from "./headbar";
import { ChracatersContext } from "~/contexts/charactersContext";
import { api } from "~/utils/api";

type CharactersMenuProps = {
  setRouter: (router: string) => void;
  setSelectedCharacterId: (characterId: string) => void;
};

const CharactersMenu: FC<CharactersMenuProps> = ({
  setRouter,
  setSelectedCharacterId,
}) => {
  const characters = useContext(ChracatersContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCharacterName, setNewCharacterName] = useState("");
  const { mutate: createCharacter } =
    api.characters.createCharacter.useMutation();

  const handleCreateCharacter = async () => {
    createCharacter(
      { name: newCharacterName },
      {
        onSuccess: () => {
          setIsModalOpen(false);
          setRouter("game");
        },
      },
    );
  };

  return (
    <>
      <Headbar />
      <hr className="w-full bg-white" />

      <div className="my-3 flex w-full flex-grow">
        <div className="relative flex h-auto flex-grow space-y-4 overflow-hidden rounded-2xl bg-white p-4">
          {/* Map through characters */}
          {characters?.map((character) => (
            <button
              key={character.id}
              className="cursor-pointer rounded-lg bg-gray-200 p-4 hover:bg-gray-300"
              onClick={() => setSelectedCharacterId(character.id)}
            >
              {character.name}
            </button>
          ))}

          {/* Button to create new character */}
          <button
            className="cursor-pointer rounded-lg bg-blue-500 p-4 text-white hover:bg-blue-600"
            onClick={() => setIsModalOpen(true)}
          >
            Create New Character
          </button>
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
