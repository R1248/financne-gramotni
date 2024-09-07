import { type FC } from "react";
import { TiArrowBack } from "react-icons/ti";

type PreGameMenuProps = {
  setTheoryRouter: (router: string) => void;
  name: string;
};

const PreGameMenu: FC<PreGameMenuProps> = ({ setTheoryRouter, name }) => {
  const theoryCategories = [
    "Úvod do základních konceptů financí, včetně toho, jak peníze fungují, základní finanční nástroje a jejich využití.",
    "Základní znalosti o správě osobních financí, včetně témat, jako jsou úspory, dluhy, a základy investování.",
    "Jak efektivně sestavit osobní nebo firemní rozpočet, sledovat příjmy a výdaje, a jak dosáhnout finančních cílů.",
    "Použití matematických metod a modelů k řešení finančních problémů, včetně výpočtu úroků, splátek a investičních výnosů.",
    "Přehled světových finančních trhů, jejich struktura, fungování a nástroje, jako jsou akcie, dluhopisy a komodity.",
    "Popis spořících účtů, jak fungují, jaké jsou jejich výhody a nevýhody, a jak efektivně spořit.",
    "Jak stavební spoření pomáhá při financování bydlení, jeho výhody, státní podpora a způsoby, jak získat nejlepší podmínky.",
    "Typy penzijních spoření a fondů, jejich výhody a jak mohou pomoci zajistit finanční stabilitu v důchodu.",
    "Investiční nástroj s pevně stanoveným výnosem, jeho fungování, výhody a vhodné strategie využití.",
    "Přehled investičních fondů, jak fungují, typy fondů a strategie pro dlouhodobé i krátkodobé investování.",
  ];

  let description = "";

  switch (name) {
    case "Základy financí":
      description = theoryCategories[0]!;
      break;
    case "Finanční gramotnost":
      description = theoryCategories[1]!;
      break;
    case "Budgeting":
      description = theoryCategories[2]!;
      break;
    case "Finanční matematika":
      description = theoryCategories[3]!;
      break;
    case "Finanční trhy":
      description = theoryCategories[4]!;
      break;
    case "Spořící účet":
      description = theoryCategories[5]!;
      break;
    case "Stavební spoření":
      description = theoryCategories[6]!;
      break;
    case "Penzijní spoření":
      description = theoryCategories[7]!;
      break;
    case "Termínované vklady":
      description = theoryCategories[8]!;
      break;
    case "Fondy":
      description = theoryCategories[9]!;
      break;
    default:
      description = "Description not found";
  }
  return (
    <div className="relative h-full w-full px-48 py-24">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setTheoryRouter("menu")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      <div className="flex h-full w-full flex-col rounded border border-solid border-black">
        <div className="p-5 text-center text-4xl">{name}</div>
        <div className="w-full px-10 text-center">{description}</div>
        <div className="mb-5 mt-auto flex flex-row">
          <button className="mx-5 my-2 w-32 rounded border border-solid border-black p-2">
            Učení
          </button>
          <button className="mx-5 my-2 w-32 rounded border border-solid border-black p-2">
            Kvíz
          </button>
          <button className="mx-5 my-2 w-32 rounded border border-solid border-black p-2">
            Hra o čas
          </button>
          <button className="mx-5 my-2 w-32 rounded border border-solid border-black p-2">
            1 vs 1
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreGameMenu;
