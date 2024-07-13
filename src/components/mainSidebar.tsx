import { type FC } from "react";
import Image from "next/image";
import sciteLogo from "../../public/scite.ico";
import profilePicture from "../../public/profile-picture.png";

const MainSidebar: FC = () => {
  return (
    <div className="min-w-[300px] bg-[#334779] p-3">
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
      <div className="mx-3 mt-4 rounded-xl bg-white px-[2px] pt-4">
        <Image
          src={profilePicture}
          alt="Profile picture"
          className="rounded-lg"
        />
        <div className="h-14"></div>
      </div>
    </div>
  );
};

export default MainSidebar;
