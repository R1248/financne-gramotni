import { useState, type FC } from "react";
import InfoSidebar from "./infoSidebar";
import HomePage from "./homePage";
import Headbar from "./headbar";
import Banks from "./bankProducts/banks";
import PortfolioPage from "./portfolioPage";
import TheoryPage from "./theory/theoryPage";

const Router: FC = () => {
  const [router, setRouter] = useState("home");
  return (
    <>
      <Headbar />
      <hr className="w-full bg-white" />
      <div className="my-3 flex w-full flex-grow">
        <InfoSidebar setRouter={setRouter} />
        {
          {
            home: <HomePage setRouter={setRouter} />,
            banks: <Banks setRouter={setRouter} />,
            portfolio: <PortfolioPage setRouter={setRouter} />,
            theory: <TheoryPage setRouter={setRouter} />,
          }[router]
        }
      </div>
      <hr className="mt-auto w-full bg-white" />
    </>
  );
};

export default Router;
