import { type FC } from "react";
import sciteLogo from "../../public/scite.ico";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Headbar: FC = () => {
  return (
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
  );
};

export default Headbar;
