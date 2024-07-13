import { type FC } from "react";
import Image from "next/image";
import businessman1 from "../../../public/businessman1.png";

const SciteMeetingBanner: FC = () => {
  return (
    <div className="relative min-h-[270px] w-full bg-[url('/scite-banner.png')] bg-cover bg-center bg-no-repeat transition delay-150 ease-in-out">
      <p className="pb-1 pl-3 pt-3 text-4xl text-white">Setkání SCITE</p>
      <p className="pl-3 text-4xl text-white">14. 9. 2024</p>
      <Image
        src={businessman1}
        alt="businessman1"
        width={172}
        height={265}
        className="absolute bottom-0 right-[-25px]"
      />
    </div>
  );
};

export default SciteMeetingBanner;
