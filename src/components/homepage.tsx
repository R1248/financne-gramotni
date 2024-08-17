import { type FC } from "react";
import businessman from "../../public/businessman.png";
import LaptopImage from "~/components/laptopImage";
import Image from "next/image";

type HomePageProps = {
  setRouter: (router: string) => void;
};

const HomePage: FC<HomePageProps> = ({ setRouter }) => {
  return (
    <div className="flex h-auto flex-grow rounded-2xl bg-white">
      <div className="flex flex-grow items-center justify-center">
        <Image src={businessman} alt="Businessman" className="h-[580px] w-64" />
      </div>
      <div className="ml-auto flex h-full flex-col justify-between px-3 pb-9 pt-3">
        <LaptopImage setRouter={setRouter} buttonImage="marxMises" />
        <LaptopImage setRouter={setRouter} buttonImage="products" />
        <LaptopImage setRouter={setRouter} buttonImage="stockMarket" />
      </div>
    </div>
  );
};

export default HomePage;
