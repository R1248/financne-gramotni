import { useState, type FC } from "react";
import InfoSidebar from "./infoSidebar";
import HomePage from "./homePageComponent";
import Headbar from "./headbar";
import Banks from "./bankProducts/banks";
import PortfolioPage from "./portfolio/portfolioPage";
import TheoryPage from "./theory/theoryPage";
import FMMenu from "./financeMarkets/fmMenu";
import PFPage from "./personalFinance/pfPage";
import WorkOpportunities from "./personalFinance/workOpportunities";
import { ProductsProvider } from "~/contexts/productsContext";
import { CharacterProvider } from "~/contexts/charactersContext";
import { PropertyProvider } from "~/contexts/propertyContext";

type GameRouterProps = {
  router: string;
  setRouter: (router: string) => void;
  selectedCharacterId: string;
};

const GameRouter: FC<GameRouterProps> = ({
  router,
  setRouter,
  selectedCharacterId,
}) => {
  const [gameRouter, setGameRouter] = useState("home");
  return (
    <ProductsProvider characterId={selectedCharacterId}>
      <PropertyProvider characterId={selectedCharacterId}>
        <CharacterProvider characterId={selectedCharacterId}>
          <Headbar router={router} setRouter={setRouter} />
          <hr className="w-full bg-white" />
          <div className="my-3 flex w-full flex-grow">
            <InfoSidebar setRouter={setGameRouter} />
            {
              {
                home: <HomePage setRouter={setGameRouter} />,
                personalFinance: <PFPage setRouter={setGameRouter} />,
                banks: <Banks setRouter={setGameRouter} />,
                portfolio: <PortfolioPage setRouter={setGameRouter} />,
                theory: <TheoryPage setRouter={setGameRouter} />,
                markets: <FMMenu setRouter={setGameRouter} />,
                workOpportunities: (
                  <WorkOpportunities setRouter={setGameRouter} />
                ),
              }[gameRouter]
            }
          </div>
          <hr className="mt-auto w-full bg-white" />
        </CharacterProvider>
      </PropertyProvider>
    </ProductsProvider>
  );
};

export default GameRouter;
