import { type FC, useContext } from "react";
import { TiArrowBack } from "react-icons/ti";
import { PropertyContext } from "~/contexts/propertyContext";

type PhysicalProductsProps = {
  setRouter: (router: string) => void;
  setPortfolioRouter: (router: string) => void;
  setSelectedPropertyId: (property: string) => void;
};

const PhysicalProducts: FC<PhysicalProductsProps> = ({
  setRouter,
  setPortfolioRouter,
  setSelectedPropertyId,
}) => {
  const properties = useContext(PropertyContext);
  return (
    <>
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setRouter("home")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      <div className="absolute left-7 top-7">
        {
          //add icons and possibility to switch between different types of products
        }
        <button
          className="mr-5 w-40 rounded border border-black p-1"
          onClick={() => setPortfolioRouter("bankingProducts")}
        >
          bankovní produkty
        </button>
        <button
          className="w-40 rounded border border-black bg-blue-500 p-1"
          disabled
        >
          Nemovitosti
        </button>
      </div>
      <div className="w-full py-20 pl-16 pr-32">
        <div className="h-96 w-full overflow-y-scroll">
          {properties.map((property) => (
            <div
              key={property.id}
              className="property-card mb-4 flex flex-row items-center rounded-lg border p-2 shadow-lg"
            >
              <div className="text-xl font-bold">{property.name}</div>

              <button
                className="ml-auto mr-2 rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                onClick={() => {
                  setPortfolioRouter("propertyExpand");
                  setSelectedPropertyId(property.id);
                }}
              >
                Spravovat
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhysicalProducts;
