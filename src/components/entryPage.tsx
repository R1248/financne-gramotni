import { signIn } from "next-auth/react";
import { type FC } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import phone from "../../public/phone.svg";

const EntryPage: FC = () => {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      {/* Header Section */}
      <div className="flex w-full flex-col items-center justify-center bg-blue-500 pt-6">
        <div className="flex w-full max-w-[1320px] flex-row items-center justify-between px-4 md:px-0">
          <Image
            src={logo as string}
            alt={"logo"}
            width={56}
            className="md:ml-0"
          />
          <button
            className="mt-1 h-10 w-full max-w-[200px] rounded-xl bg-white px-5 text-center text-base font-bold text-black md:h-12 md:text-lg"
            disabled={true}
            onClick={() => void signIn()}
          >
            Spustit aplikaci
          </button>
        </div>

        {/* Content Section */}
        <div className="mt-12 flex w-full max-w-[1320px] flex-col items-center px-4 text-center md:mt-16 md:flex-row md:items-start md:text-left">
          <div className="flex-grow text-white md:mt-12">
            <h1 className="text-3xl font-semibold leading-10 md:text-5xl md:leading-[70px]">
              Vzdělávací Software Pro Střední Školy
            </h1>
            <p className="mt-4 text-lg font-semibold md:mt-6 md:text-xl">
              Poskytujeme nejen softwareové služby pro výuku finanční
              gramotnosti a ekonomie ve 21. století
            </p>
          </div>

          {/* Phone Image */}
          <div className="mt-8 w-full max-w-[24rem] md:mt-0 md:max-w-[35rem]">
            <Image
              width={750}
              height={750}
              src={phone as string}
              alt={"phone"}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Spacer */}
        <div className="h-52 w-full md:h-32"></div>
      </div>
    </div>
  );
};

export default EntryPage;
