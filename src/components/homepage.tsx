import { useContext, type FC } from "react";
import sciteLogo from "../../public/scite.ico";
import Image from "next/image";
import Portfolio from "~/components/portfolio";
import businessman from "../../public/businessman.png";
import LaptopImage from "~/components/laptopImage";
import { signOut } from "next-auth/react";
import { UserDataContext } from "~/contexts/dataContexts";

const Homepage: FC = () => {
  const userData = useContext(UserDataContext);
  return (
    <>
      <div className="h-18 mb-2 mt-4 flex max-h-16 w-full">
        <Image src={sciteLogo} alt="SCITE finance" height={64} />
        <div className="flex h-full flex-col">
          <h1 className="mt-1 text-[41px] leading-10 text-[#99c0ff]">
            SCITE FINANCE
          </h1>
          <p className="text-lg leading-5 text-white">
            VAŠE CESTA K FINANČNÍ SVOBODĚ
          </p>
        </div>
        <div className="ml-auto">
          <button
            className="ml-auto flex h-full flex-row items-center justify-center rounded bg-white p-2 text-center text-lg hover:bg-gray-200"
            onClick={() => void signOut()}
          >
            <p className="text-lg">Odhlásit</p>
          </button>
        </div>
      </div>
      <hr className="w-full bg-white" />
      <div className="my-3 flex w-full flex-grow">
        <div className="mr-3 flex w-96 flex-col rounded-2xl bg-white">
          <h1 className="my-3 ml-3 text-3xl">{userData.name}</h1>
          <div className="mx-3 mb-3 flex flex-col border border-solid border-black p-3">
            <div className="mb-3 flex h-12 flex-col border border-solid border-black">
              <div className="flex flex-grow items-center">
                <p className="ml-2 text-2xl">Majetek:</p>
                <p className="ml-auto mr-2 text-2xl">{userData.money} Kč</p>
              </div>
              <div className="flex h-2 w-full border-t border-solid border-black">
                <div className="h-full w-2/5 bg-yellow-500"></div>
                <div className="h-full w-3/5 bg-blue-700"></div>
              </div>
            </div>
            <div className="mb-3 flex h-12 flex-col border border-solid border-black">
              <div className="flex flex-grow items-center">
                <p className="ml-2 text-2xl">Věk:</p>
                <p className="ml-auto mr-2 text-2xl">{userData.age}</p>
                <button className="flex h-full w-10 justify-center border-l border-solid border-black pt-3 text-3xl leading-3">
                  +
                </button>
              </div>
              <div className="flex h-2 w-full border-t border-solid border-black">
                <div className="h-full w-1/4 border-r border-solid border-black bg-blue-700"></div>
                <div className="h-full w-1/4 border-r border-solid border-black bg-blue-700"></div>
                <div className="h-full w-1/4 border-r border-solid border-black bg-blue-700"></div>
                <div className="h-full w-1/4"></div>
              </div>
            </div>
            <div className="flex h-12 flex-col border border-solid border-black">
              <div className="flex flex-grow items-center">
                <p className="ml-2 text-2xl">Pozice:</p>
                <p className="ml-auto mr-2 text-2xl">Finanční poradce</p>
              </div>
              <div className="h-2 w-full border-t border-solid border-black">
                <div className="h-full w-1/3 bg-gradient-to-r from-blue-400 to-blue-700"></div>
              </div>
            </div>
          </div>
          <div className="mx-3 mb-5 mt-auto flex flex-grow flex-col border border-solid border-black p-3">
            <h1 className="text-2xl">Portfolio</h1>
            <Portfolio />
          </div>
        </div>
        <div className="flex h-auto flex-grow rounded-2xl bg-white">
          <div className="flex flex-grow items-center justify-center">
            <Image
              src={businessman}
              alt="Businessman"
              className="h-[580px] w-64"
            />
          </div>
          <div className="ml-auto flex h-full flex-col justify-between px-3 pb-9 pt-3">
            <LaptopImage buttonImage="marxMises" />
            <LaptopImage buttonImage="products" />
            <LaptopImage buttonImage="stockMarket" />
          </div>
        </div>
      </div>
      <hr className="mt-auto w-full bg-white" />
    </>
  );
};

export default Homepage;
