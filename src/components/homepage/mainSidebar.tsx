import { type FC } from "react";
import Image from "next/image";
import sciteLogo from "../../../public/scite.ico";
import profilePicture from "../../../public/profile-picture.png";
import { MdOutlineMoreTime } from "react-icons/md";

const MainSidebar: FC = () => {
  return (
    <div className="flex min-w-[300px] flex-col bg-[#334779] p-3">
      <div className="relative ml-[2px] flex flex-row">
        <Image
          src={sciteLogo}
          alt="SCITE logo"
          width={50}
          height={50}
          className="absolute"
        />
        <div className="ml-12">
          <p className="mt-[-2px] text-[29px] text-[#BBD6FF]">SCITE FINANCE</p>
          <p className="mt-[-8px] text-[12.8px] text-white">
            VAŠE CESTA K FINANČNÍ SVOBODĚ
          </p>
        </div>
      </div>
      <div className="mx-3 mt-4 overflow-hidden rounded-lg bg-white pt-4">
        <div className="h-auto px-1">
          <div className="relative">
            <div className="absolute flex h-full w-full items-center justify-center bg-transparent text-[128px] text-transparent hover:cursor-pointer hover:bg-white/50 hover:text-black">
              <MdOutlineMoreTime />
            </div>
            <Image src={profilePicture} alt="Profile picture" />
          </div>
        </div>
        <div className="fle-row flex h-14 border-t border-solid border-blue-400">
          <div className="flex h-full w-1/4 items-center justify-center border-r border-solid border-black bg-blue-200 text-3xl">
            34
          </div>
          <div className="h-full w-1/4 border-r border-solid border-black bg-blue-300"></div>
          <div className="h-full w-1/4 border-r border-solid border-black bg-blue-400"></div>
          <div className="h-full w-1/4"></div>
        </div>
      </div>
      <div className="mx-3 mb-2 mt-3 w-auto rounded-lg border border-solid border-blue-400 bg-white py-2 pl-2">
        <p className="font-semibold">Dominik Švancara</p>
        <p className="font-semibold">Finanční manažer SCITE</p>
        <p className="mt-5 font-semibold">Majetek: 1 247 256</p>
      </div>
      <button className="mx-3 mb-2 mt-auto w-auto rounded-lg border border-solid border-blue-400 bg-white py-3">
        Nastavení
      </button>
    </div>
  );
};

export default MainSidebar;
