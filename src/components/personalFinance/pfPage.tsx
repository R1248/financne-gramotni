import { type FC, useContext, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import Image from "next/image";
import creditCard from "../../../public/card.png";
import { UserDataContext } from "~/contexts/dataContexts";
import house from "../../../public/house.png";
import car from "../../../public/car.png";
import vacation from "../../../public/vacation.png";
import luxury from "../../../public/luxuryGoods.png";
import Offers from "~/components/personalFinance/offers";

type InfoSidebarProps = {
  setRouter: (router: string) => void;
};

const PFPage: FC<InfoSidebarProps> = ({ setRouter }) => {
  const [personalFinanceRouter, setPersonalFinanceRouter] = useState("menu");
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
          menu: <Menu setPersonalFinanceRouter={setPersonalFinanceRouter} />,
          accommodation: (
            <Offers
              category="accommodation"
              setPersonalFinanceRouter={setPersonalFinanceRouter}
            />
          ),
          cars: (
            <Offers
              category="cars"
              setPersonalFinanceRouter={setPersonalFinanceRouter}
            />
          ),
          luxuryGoods: (
            <Offers
              category="luxuryGoods"
              setPersonalFinanceRouter={setPersonalFinanceRouter}
            />
          ),
          vacation: (
            <Offers
              category="vacation"
              setPersonalFinanceRouter={setPersonalFinanceRouter}
            />
          ),
        }[personalFinanceRouter]
      }
    </div>
  );
};

export default PFPage;

type MenuProps = {
  setPersonalFinanceRouter: (router: string) => void;
};

const Menu: FC<MenuProps> = ({ setPersonalFinanceRouter }) => {
  // State for sliders
  const [foodExpense, setFoodExpense] = useState(100);
  const [entertainmentExpense, setEntertainmentExpense] = useState(100);
  const [clothesExpense, setClothesExpense] = useState(100);

  const userData = useContext(UserDataContext);

  return (
    <div className="flex h-full w-full flex-col">
      {/* First Row: Image on the left, Sliders on the right */}
      <div className="flex h-1/2 w-full">
        {/* Credit Card Image */}
        <div className="flex w-1/2 items-center justify-center">
          <div className="group relative h-52 w-80">
            {/* Front Side - Credit Card */}
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
              <Image
                src={creditCard}
                alt="Credit Card"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>

            {/* Back Side - Black Rectangle with Number */}
            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black text-3xl font-bold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {userData.money} Kč
            </div>
          </div>
        </div>

        {/* Sliders for Life Costs */}
        <div className="flex w-1/2 flex-col items-start justify-center space-y-4 p-4">
          {/* Food Slider */}
          <div className="flex flex-col">
            <label htmlFor="food-slider" className="mb-2">
              Food: ${foodExpense}
            </label>
            <input
              id="food-slider"
              type="range"
              min={100}
              max={500}
              step={100}
              value={foodExpense}
              onChange={(e) => setFoodExpense(parseInt(e.target.value))}
              list="sums"
              className="w-48"
            />
          </div>

          {/* Entertainment Slider */}
          <div className="flex flex-col">
            <label htmlFor="entertainment-slider" className="mb-2">
              Entertainment: ${entertainmentExpense}
            </label>
            <input
              id="entertainment-slider"
              type="range"
              min={100}
              max={500}
              step={100}
              value={entertainmentExpense}
              onChange={(e) =>
                setEntertainmentExpense(parseInt(e.target.value))
              }
              list="sums"
              className="w-48"
            />
          </div>

          {/* Clothes Slider */}
          <div className="flex flex-col">
            <label htmlFor="clothes-slider" className="mb-2">
              Clothes: ${clothesExpense}
            </label>
            <input
              id="clothes-slider"
              type="range"
              min={100}
              max={500}
              step={100}
              value={clothesExpense}
              onChange={(e) => setClothesExpense(parseInt(e.target.value))}
              list="sums"
              className="w-48"
            />
          </div>
        </div>
      </div>

      {/* Second Row - Fields with Placeholders */}
      <div className="flex h-1/2 w-full flex-row items-center justify-between px-20 py-4">
        {/* Placeholder fields */}
        <button
          className="flex h-48 w-48 flex-col items-center overflow-hidden rounded-md border border-black"
          onClick={() => setPersonalFinanceRouter("accommodation")}
        >
          <Image src={house} alt="House" />
          <span className="mt-4">Nemovitosti</span>
        </button>
        <button
          className="flex h-48 w-48 flex-col items-center overflow-hidden rounded-md border border-black"
          onClick={() => setPersonalFinanceRouter("cars")}
        >
          <Image src={car} alt="Car" />
          <span className="mt-4">Auta</span>
        </button>
        <button
          className="flex h-48 w-48 flex-col items-center overflow-hidden rounded-md border border-black"
          onClick={() => setPersonalFinanceRouter("vacation")}
        >
          <Image src={vacation} alt="Vacation" />
          <span className="mt-4">Zážitky</span>
        </button>
        <button
          className="flex h-48 w-48 flex-col items-center overflow-hidden rounded-md border border-black"
          onClick={() => setPersonalFinanceRouter("luxuryGoods")}
        >
          <Image src={luxury} alt="Luxury" />
          <span className="mt-4">Luxusní zboží</span>
        </button>
      </div>
    </div>
  );
};
