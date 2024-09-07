import { type FC, useState } from "react";
import Image from "next/image";
import theoryImage from "../../../public/theory_card.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type TheoryCardProps = {
  name: string;
  setTheoryRouter: (router: string) => void;
  setPreGame: (preGame: string) => void;
};

const TheoryCard: FC<TheoryCardProps> = ({
  name,
  setTheoryRouter,
  setPreGame,
}) => {
  return (
    <button
      className="m-4 h-48 w-48 overflow-hidden rounded-lg border border-solid border-black"
      onClick={() => {
        setTheoryRouter("preGameMenu");
        setPreGame(name);
      }}
    >
      <div className="relative w-full">
        <Image alt="product" src={theoryImage} />
      </div>
      <div className="mt-5 h-full w-full text-center text-sm">{name}</div>
    </button>
  );
};

type TheoryMenuProps = {
  setTheoryRouter: (router: string) => void;
  setPreGame: (preGame: string) => void;
};

const TheoryMenu: FC<TheoryMenuProps> = ({ setTheoryRouter, setPreGame }) => {
  const theoryCategories = [
    "Základy financí",
    "Finanční gramotnost",
    "Budgeting",
    "Finanční matematika",
    "Finanční trhy",
  ];

  const productCategories = [
    "Spořící účet",
    "Stavební spoření",
    "Penzijní spoření",
    "Termínované vklady",
    "Fondy",
  ];

  // States to manage the current visible items
  const [startIndexTheory, setStartIndexTheory] = useState(0);
  const [startIndexProduct, setStartIndexProduct] = useState(0);
  const visibleCategories = 4;

  // Navigation handlers to show only the next/previous field (move by 1)
  const handlePrevTheory = () => {
    if (startIndexTheory > 0) {
      setStartIndexTheory((prev) => prev - 1);
    }
  };

  const handleNextTheory = () => {
    if (startIndexTheory + visibleCategories < theoryCategories.length) {
      setStartIndexTheory((prev) => prev + 1);
    }
  };

  const handlePrevProduct = () => {
    if (startIndexProduct > 0) {
      setStartIndexProduct((prev) => prev - 1);
    }
  };

  const handleNextProduct = () => {
    if (startIndexProduct + visibleCategories < productCategories.length) {
      setStartIndexProduct((prev) => prev + 1);
    }
  };
  return (
    <div className="relative flex w-full flex-col">
      {/* Theory Categories */}
      <h2 className="mb-2 mt-8 text-center text-2xl font-bold">Teorie</h2>
      <div className="flex items-center justify-center">
        <IoIosArrowBack
          className={`cursor-pointer text-4xl ${startIndexTheory === 0 ? "text-gray-300" : ""}`}
          onClick={handlePrevTheory}
        />
        <div className="flex flex-row overflow-hidden">
          {theoryCategories
            .slice(startIndexTheory, startIndexTheory + visibleCategories)
            .map((category, index) => (
              <TheoryCard
                key={index}
                name={category}
                setTheoryRouter={setTheoryRouter}
                setPreGame={setPreGame}
              />
            ))}
        </div>
        <IoIosArrowForward
          className={`cursor-pointer text-4xl ${
            startIndexTheory + visibleCategories >= theoryCategories.length
              ? "text-gray-300"
              : ""
          }`}
          onClick={handleNextTheory}
        />
      </div>

      {/* Product Categories */}
      <h2 className="mb-2 mt-4 text-center text-2xl font-bold">Produkty</h2>
      <div className="flex items-center justify-center">
        <IoIosArrowBack
          className={`cursor-pointer text-4xl ${startIndexProduct === 0 ? "text-gray-300" : ""}`}
          onClick={handlePrevProduct}
        />
        <div className="flex flex-row overflow-hidden">
          {productCategories
            .slice(startIndexProduct, startIndexProduct + visibleCategories)
            .map((category, index) => (
              <TheoryCard
                key={index}
                name={category}
                setTheoryRouter={setTheoryRouter}
                setPreGame={setPreGame}
              />
            ))}
        </div>
        <IoIosArrowForward
          className={`cursor-pointer text-4xl ${
            startIndexProduct + visibleCategories >= productCategories.length
              ? "text-gray-300"
              : ""
          }`}
          onClick={handleNextProduct}
        />
      </div>
    </div>
  );
};

export default TheoryMenu;
