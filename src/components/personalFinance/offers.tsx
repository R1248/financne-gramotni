import { type FC } from "react";
import { TiArrowBack } from "react-icons/ti";
import { realEstateOffers, carOffers } from "~/tangibleProducts";

type OffersProps = {
  category: string;
  setPersonalFinanceRouter: (router: string) => void;
};

const Offers: FC<OffersProps> = ({ category, setPersonalFinanceRouter }) => {
  return (
    <div className="h-full w-full">
      <button
        className="absolute right-7 top-7 z-10 rounded border border-solid border-black p-1"
        onClick={() => setPersonalFinanceRouter("menu")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      {
        {
          accommodation: <AccommodationOffers />,
          cars: <CarOffers />,
        }[category]
      }
    </div>
  );
};

export default Offers;

const AccommodationOffers: FC = () => {
  return (
    <div className="h-full w-full">
      <div className="mb-10 ml-10 mr-24 mt-24 h-[460px] overflow-y-scroll">
        {realEstateOffers.map((offer, i) => (
          <div
            key={i}
            className="mb-2 flex h-48 w-full flex-row bg-gray-100 p-2"
          >
            <div className="h-44 w-44 bg-slate-600">placeholder</div>
            <div className="flex-col">
              <p>{offer.description}</p>
              <p>{offer.locality}</p>
              <p>{offer.area} m²</p>
              <p>{offer.price} CZK</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CarOffers: FC = () => {
  return (
    <div className="h-full w-full">
      <div className="mb-20 ml-10 mr-24 mt-24 h-96 overflow-y-scroll">
        {carOffers.map((offer, i) => (
          <div
            key={i}
            className="mb-2 flex justify-between rounded border border-black p-1"
          >
            <p>{offer.make}</p>
            <p>{offer.price} CZK</p>
          </div>
        ))}
      </div>
    </div>
  );
};
