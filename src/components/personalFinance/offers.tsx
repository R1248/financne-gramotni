import { type FC } from "react";
import { TiArrowBack } from "react-icons/ti";

type OffersProps = {
  category: string;
  setPersonalFinanceRouter: (router: string) => void;
};

const Offers: FC<OffersProps> = ({ category, setPersonalFinanceRouter }) => {
  return (
    <div className="">
      <button
        className="absolute right-7 top-7 z-10 rounded border border-solid border-black p-1"
        onClick={() => setPersonalFinanceRouter("menu")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      category: {category}
    </div>
  );
};

export default Offers;
