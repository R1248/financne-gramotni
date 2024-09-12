import { type FC, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import TheoryMenu from "./theoryMenu";
import PreGameMenu from "./preGameMenu";
import { Quiz } from "./theoryGames";

type TheoryPageProps = {
  setRouter: (router: string) => void;
};

const TheoryPage: FC<TheoryPageProps> = ({ setRouter }) => {
  const [theoryRouter, setTheoryRouter] = useState("menu");
  const [game, setGame] = useState("");

  return (
    <div className="relative flex h-auto flex-grow overflow-hidden rounded-2xl bg-white">
      <button
        className="absolute right-7 top-7 z-10 rounded border border-solid border-black p-1"
        onClick={() => setRouter("home")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      {
        {
          menu: (
            <TheoryMenu
              setTheoryRouter={setTheoryRouter}
              setPreGame={setGame}
            />
          ),
          preGameMenu: (
            <PreGameMenu setTheoryRouter={setTheoryRouter} name={game} />
          ),
          quiz: <Quiz setTheoryRouter={setTheoryRouter} name={game} />,
        }[theoryRouter]
      }
    </div>
  );
};

export default TheoryPage;
