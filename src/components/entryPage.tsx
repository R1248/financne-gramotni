import { signIn } from "next-auth/react";
import { type FC } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import phone from "../../public/phone4.svg";

const EntryPage: FC = () => {
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="flex w-full flex-col items-center justify-center bg-blue-500 pt-6">
        <div className="flex h-14 w-full max-w-[1320px] flex-row">
          <Image src={logo as string} alt={"logo"} width={56} />
          <button
            className="ml-auto h-[52px] rounded-xl bg-white px-5 text-left text-lg font-bold text-black"
            disabled={true}
            onClick={() => void signIn()}
          >
            Spustit aplikaci
          </button>
        </div>
        <div className="mt-36 flex max-w-[1320px] flex-row">
          <div className="flex-grow flex-col text-white">
            <h1 className="text-6xl font-semibold leading-[70px]">
              Vzdělávací Software Pro Střední Školy
            </h1>
            <p className="mt-6 text-xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
              <br />
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="w-[65rem]">
            <Image
              width={800}
              src={phone as string}
              alt={"phone"}
              className="mt-[-8rem]"
            />
          </div>
        </div>
        <div className="h-32 w-full"></div>
      </div>
    </div>
  );
};

export default EntryPage;
