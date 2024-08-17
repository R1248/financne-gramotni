import { useState, type FC } from "react";
import InfoSidebar from "./infoSidebar";
import HomePage from "./homePage";
import Headbar from "./headbar";
import Banks from "./banks";

const Router: FC = () => {
  const [router, setRouter] = useState("home");
  return (
    <>
      <Headbar />
      <hr className="w-full bg-white" />
      <div className="my-3 flex w-full flex-grow">
        <InfoSidebar />
        {
          {
            home: <HomePage setRouter={setRouter} />,
            banks: <Banks setRouter={setRouter} />,
          }[router]
        }
      </div>
      <hr className="mt-auto w-full bg-white" />
    </>
  );
};

export default Router;
