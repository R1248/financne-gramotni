import { type FC } from "react";
import Image from "next/image";
import sciteLogo from "../../../public/scite.ico";
import profilePicture from "../../../public/profile-picture.png";

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
      <div className="mx-3 mt-4 rounded-lg bg-white pt-4">
        <div className="px-1">
          <Image src={profilePicture} alt="Profile picture" />
        </div>
        <div className="h-14 border-t border-solid border-blue-400">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
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
