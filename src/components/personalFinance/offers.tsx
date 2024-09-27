import { useContext, type FC } from "react";
import { TiArrowBack } from "react-icons/ti";
import { CharacterContext } from "~/contexts/charactersContext";
import { carOffers } from "~/tangibleProducts";
import flat from "../../../public/flat.png";
import { api } from "~/utils/api";
import seedrandom from "seedrandom";
import Image from "next/image";
import { PropertyContext } from "~/contexts/propertyContext";

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

export const citiesMeterPrice = [
  { city: "Praha 1", price: 198200 },
  { city: "Praha 2", price: 154800 },
  { city: "Praha 3", price: 147000 },
  { city: "Praha 4", price: 130300 },
  { city: "Praha 5", price: 137900 },
  { city: "Praha 6", price: 141600 },
  { city: "Praha 7", price: 161100 },
  { city: "Praha 8", price: 133900 },
  { city: "Praha 9", price: 134700 },
  { city: "Praha 10", price: 117500 },
  { city: "Brno-střed", price: 113500.5 },
  { city: "Brno-sever", price: 110200.65 },
  { city: "Brno-jih", price: 107000.3 },
  { city: "Brno-východ", price: 100500.85 },
  { city: "Brno-venkov", price: 103500.4 },
  { city: "Ostrava-Jih", price: 46900 },
  { city: "Ostrava-Moravská Ostrava", price: 56700 },
  { city: "Ostrava-Poruba", price: 59300 },
  { city: "Ostrava-Hrabůvka", price: 46800 },
  { city: "Ostrava-Zábřeh", price: 46342 },
  { city: "Plzeň-město", price: 74500 },
  { city: "Plzeň-jih", price: 56100 },
  { city: "Plzeň-sever", price: 67400 },
  { city: "Liberec-město", price: 75100 },
  { city: "Liberec-sever", price: 70500 },
  { city: "Olomouc-město", price: 89300 },
  { city: "Olomouc-okres", price: 72200 },
  { city: "České Budějovice", price: 77600 },
  { city: "Hradec Králové", price: 81600 },
  { city: "Pardubice", price: 72100 },
  { city: "Ústí nad Labem", price: 36000 },
  { city: "Zlín", price: 73600 },
  { city: "Havířov", price: 40100 },
  { city: "Kladno", price: 81900 },
  { city: "Most", price: 26100 },
  { city: "Opava", price: 52200 },
  { city: "Jihlava", price: 63200 },
  { city: "Frýdek-Místek", price: 51000 },
  { city: "Teplice", price: 32900 },
  { city: "Karviná", price: 33000 },
  { city: "Karlovy Vary", price: 62300 },
  { city: "Chomutov", price: 28400 },
  { city: "Děčín", price: 38800 },
  { city: "Mladá Boleslav", price: 76800 },
  { city: "Jablonec nad Nisou", price: 59700 },
  { city: "Prostějov", price: 54500 },
  { city: "Přerov", price: 52200 },
  { city: "Česká Lípa", price: 42600 },
  { city: "Třebíč", price: 56900 },
  { city: "Tábor", price: 66900 },
  { city: "Třinec", price: 38500 },
  { city: "Znojmo", price: 57700 },
  { city: "Kolín", price: 70500 },
  { city: "Příbram", price: 61900 },
  { city: "Cheb", price: 41900 },
  { city: "Písek", price: 62100 },
];

const AccommodationOffers: FC = () => {
  const character = useContext(CharacterContext);
  const properties = useContext(PropertyContext);

  const seed = `${character.id}-${character.age}`;
  const rng = seedrandom(seed);

  const { mutate: buyAccommodation } =
    api.property.createProperty.useMutation();
  const { mutate: transaction } = api.characters.transaction.useMutation();

  const numberOfOffers = Math.floor(rng() * 10);

  const offers = Array.from({ length: numberOfOffers }, (_, i) => {
    const city = citiesMeterPrice[Math.floor(rng() * citiesMeterPrice.length)];
    const area = Math.floor(rng() * 100) + 50;
    const rooms = Math.floor(area / 29);
    const energyEfficiency = Math.floor(rng() * 100);
    const parkingPlace = rng() > 0.5;
    const floor = Math.floor(rng() * 10);
    const hasBalcony = floor === 0 ? 0 : rng() > 0.5;
    const balconyArea = hasBalcony ? Math.floor(rng() * 10) + 5 : 0;
    const intrinsicValue =
      (area * city!.price * (1 + energyEfficiency / 1000) +
        (hasBalcony ? (balconyArea * city!.price) / 4 : 0)) *
        (0.0618 * Math.log(floor + 1) + 0.953) +
      (parkingPlace ? 4 * city!.price : 0);
    let energyEfficiencyCoeff;
    if (energyEfficiency < 10) {
      energyEfficiencyCoeff = "G";
    } else if (energyEfficiency < 25) {
      energyEfficiencyCoeff = "F";
    } else if (energyEfficiency < 40) {
      energyEfficiencyCoeff = "E";
    } else if (energyEfficiency < 55) {
      energyEfficiencyCoeff = "D";
    } else if (energyEfficiency < 70) {
      energyEfficiencyCoeff = "C";
    } else if (energyEfficiency < 85) {
      energyEfficiencyCoeff = "B";
    } else {
      energyEfficiencyCoeff = "A";
    }
    const price =
      Math.floor((intrinsicValue * (1 + (0.5 - rng()) * 0.3)) / 1000) * 1000;

    const name = `Byt ${rooms}+kk v lokalitě ${city!.city}`;
    return {
      key: i,
      name,
      city,
      area,
      rooms,
      floor,
      energyEfficiency,
      energyEfficiencyCoeff,
      price,
      intrinsicValue,
      hasBalcony,
      gardernArea: 0,
      balconyArea,
      parkingPlace,
    };
  });

  const utils = api.useUtils();

  const handleBuyAccommodation = (offer: (typeof offers)[0]) => {
    buyAccommodation(
      {
        characterId: character.id,
        name: offer.name,
        city: offer.city!.city,
        type: "flat",
        area: offer.area,
        rooms: offer.rooms,
        floor: offer.floor,
        energyEfficiency: offer.energyEfficiency,
        localityBonus: 0,
        playerLivesHere: false,
        parkingPlaces: offer.parkingPlace ? 1 : 0,
        balconyArea: offer.balconyArea,
        gardenArea: 0,
      },
      {
        onSuccess: () => {
          void utils.property.getAllProperties.invalidate();
        },
      },
    );
    transaction(
      {
        characterId: character.id,
        sum: -offer.price,
      },
      {
        onSuccess: () => {
          void utils.characters.getSelectedCharacter.invalidate();
        },
      },
    );
  };

  const relevantOffers = offers.filter(
    (offer) =>
      !properties.some(
        (property) =>
          offer.name === property.name && offer.area === property.area,
      ),
  );

  return (
    <div className="h-full w-full">
      <div className="mb-10 ml-10 mr-24 mt-24 h-[460px] overflow-y-scroll">
        {relevantOffers.map((offer, i) => (
          <div
            key={i}
            className="relative mb-2 flex h-52 w-full flex-row bg-gray-100 p-2"
          >
            <Image className="h-48 w-48" src={flat} alt={offer.name} />
            <div className="ml-2 flex-col">
              <p>{offer.name}</p>
              <p>{offer.area} m²</p>
              <p>{offer.rooms} pokojů</p>
              <p>{offer.floor}. patro</p>
              <p>{offer.energyEfficiencyCoeff} energetická náročnost</p>
              <p>
                {offer.hasBalcony ? "s balkonem" : "bez balkonu"}{" "}
                {offer.hasBalcony ? `(${offer.balconyArea} m²)` : ""}
              </p>
              <p>{offer.parkingPlace ? "s" : "bez"} parkovacím místem</p>
              <p>{offer.price} CZK</p>
            </div>
            <button
              className="absolute bottom-4 right-4 rounded-md border border-black px-3 py-1"
              onClick={() => handleBuyAccommodation(offer)}
            >
              Koupit
            </button>
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
