import { type FC } from "react";
import Image from "next/image";
import businessman2 from "../../../../public/businessman2.png";

const WorkOpportunityBanner: FC = () => {
  return (
    <div className="relative min-h-[270px] w-full bg-[url('/scite-banner2.png')] bg-cover bg-center bg-no-repeat transition delay-150 ease-in-out">
      <p className="pb-1 pl-3 pt-3 text-4xl text-white">Přidej se k nám</p>
      <Image
        src={businessman2}
        alt="businessman2"
        width={172}
        height={265}
        className="absolute bottom-0 right-[-40px]"
      />
    </div>
  );
};

export default WorkOpportunityBanner;
