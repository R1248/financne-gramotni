import { useState, type FC } from "react";
import { TiArrowBack } from "react-icons/ti";

type FMMenuProps = {
  setRouter: (router: string) => void;
};

const FMMenu: FC<FMMenuProps> = ({ setRouter }) => {
  const [marketsRouter, setMarketsRouter] = useState("menu");
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
          menu: <Menu />,
        }[marketsRouter]
      }
    </div>
  );
};

export default FMMenu;

const Menu = () => {
  return (
    <div>
      <div>akcie</div>
      <div>indexy</div>
      <div>dluhospisy</div>
      <div>měny</div>
      <div>komodity</div>
      <div>kryptoměny</div>
    </div>
  );
};
