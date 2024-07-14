import { type FC } from "react";

const RightSidebar: FC = () => {
  return (
    <div className="mx-5 my-3 flex min-w-[410px] flex-col bg-[#3A5C8F] text-center">
      <p className="mt-3 text-4xl text-white">Objevujte</p>
      <button className="mx-8 mb-2 mt-4 w-auto rounded-lg border border-solid border-blue-400 bg-white py-10">
        SCITE Investment
      </button>
      <button className="mx-8 mb-2 mt-4 w-auto rounded-lg border border-solid border-blue-400 bg-white py-10">
        MUNI
      </button>
      <button className="mx-8 mb-2 mt-4 w-auto rounded-lg border border-solid border-blue-400 bg-white py-10">
        JIC
      </button>
      <button className="mx-8 mb-2 mt-4 w-auto rounded-lg border border-solid border-blue-400 bg-white py-10">
        Mises Institute
      </button>
    </div>
  );
};

export default RightSidebar;
