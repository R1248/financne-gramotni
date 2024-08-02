import { type FC } from "react";

const RightSidebar: FC = () => {
  return (
    <div className="mx-5 my-3 flex min-w-[410px] flex-col bg-[#3A5C8F] text-center">
      <p className="mt-3 text-4xl text-white">Objevujte</p>
      <a href="https://www.sciteinvestment.com" className="mx-8 w-auto">
        <button className="mb-2 mt-4 w-full rounded-lg border border-solid border-blue-400 bg-white py-10">
          SCITE Investment
        </button>
      </a>
      <a href="https://www.muni.cz" className="mx-8 w-auto">
        <button className="mb-2 mt-4 w-full rounded-lg border border-solid border-blue-400 bg-white py-10">
          MUNI
        </button>
      </a>
      <a href="https://www.jic.cz" className="mx-8 w-auto">
        <button className="mb-2 mt-4 w-full rounded-lg border border-solid border-blue-400 bg-white py-10">
          JIC
        </button>
      </a>
      <a href="https://mises.org/" className="mx-8 w-auto">
        <button className="mb-2 mt-4 w-full rounded-lg border border-solid border-blue-400 bg-white py-10">
          Mises Institute
        </button>
      </a>
    </div>
  );
};

export default RightSidebar;
