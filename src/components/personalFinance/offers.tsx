import { useContext, type FC } from "react";
import { TiArrowBack } from "react-icons/ti";
import { CharacterContext } from "~/contexts/charactersContext";
import { carOffers } from "~/tangibleProducts";
import flat from "../../../public/flat.png";
import { api } from "~/utils/api";
import seedrandom from "seedrandom";
import Image from "next/image";

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

const citiesByRegion = {
  Praha: [
    { district: "Praha 1", price: 198200 },
    { district: "Praha 2", price: 154800 },
    { district: "Praha 3", price: 147000 },
    { district: "Praha 4", price: 130300 },
    { district: "Praha 5", price: 137900 },
    { district: "Praha 6", price: 141600 },
    { district: "Praha 7", price: 161100 },
    { district: "Praha 8", price: 133900 },
    { district: "Praha 9", price: 134700 },
    { district: "Praha 10", price: 117500 },
  ],
  Brno: [
    { district: "Brno-střed", price: 113500.5 },
    { district: "Brno-sever", price: 110200.65 },
    { district: "Brno-jih", price: 107000.3 },
    { district: "Brno-východ", price: 100500.85 },
    { district: "Brno-venkov", price: 103500.4 },
  ],
  Ostrava: [
    { district: "Ostrava-Jih", price: 46900 },
    { district: "Ostrava-Moravská Ostrava", price: 56700 },
    { district: "Ostrava-Poruba", price: 59300 },
    { district: "Ostrava-Hrabůvka", price: 46800 },
    { district: "Ostrava-Zábřeh", price: 46342 },
  ],
  Plzeň: [
    { district: "Plzeň-město", price: 74500 },
    { district: "Plzeň-jih", price: 56100 },
    { district: "Plzeň-sever", price: 67400 },
  ],
  Liberec: [
    { district: "Liberec-město", price: 75100 },
    { district: "Liberec-sever", price: 70500 },
  ],
  Olomouc: [
    { district: "Olomouc-město", price: 89300 },
    { district: "Olomouc-okres", price: 72200 },
  ],
  "České Budějovice": [{ district: "České Budějovice", price: 77600 }],
  "Hradec Králové": [{ district: "Hradec Králové", price: 81600 }],
  Pardubice: [{ district: "Pardubice", price: 72100 }],
  "Ústí nad Labem": [{ district: "Ústí nad Labem", price: 36000 }],
  Zlín: [{ district: "Zlín", price: 73600 }],
  Havířov: [{ district: "Havířov", price: 40100 }],
  Kladno: [{ district: "Kladno", price: 81900 }],
  Most: [{ district: "Most", price: 26100 }],
  Opava: [{ district: "Opava", price: 52200 }],
  Jihlava: [{ district: "Jihlava", price: 63200 }],
  "Frýdek-Místek": [{ district: "Frýdek-Místek", price: 51000 }],
  Teplice: [{ district: "Teplice", price: 32900 }],
  Karviná: [{ district: "Karviná", price: 33000 }],
  "Karlovy Vary": [{ district: "Karlovy Vary", price: 62300 }],
  Chomutov: [{ district: "Chomutov", price: 28400 }],
  Děčín: [{ district: "Děčín", price: 38800 }],
  "Mladá Boleslav": [{ district: "Mladá Boleslav", price: 76800 }],
  "Jablonec nad Nisou": [{ district: "Jablonec nad Nisou", price: 59700 }],
  Prostějov: [{ district: "Prostějov", price: 54500 }],
  Přerov: [{ district: "Přerov", price: 52200 }],
  "Česká Lípa": [{ district: "Česká Lípa", price: 42600 }],
  Třebíč: [{ district: "Třebíč", price: 56900 }],
  Tábor: [{ district: "Tábor", price: 66900 }],
  Třinec: [{ district: "Třinec", price: 38500 }],
  Znojmo: [{ district: "Znojmo", price: 57700 }],
  Kolín: [{ district: "Kolín", price: 70500 }],
  Příbram: [{ district: "Příbram", price: 61900 }],
  Cheb: [{ district: "Cheb", price: 41900 }],
  Písek: [{ district: "Písek", price: 62100 }],
};

const AccommodationOffers: FC = () => {
  const character = useContext(CharacterContext);

  const seed = `${character.id}-${character.age}`;
  const rng = seedrandom(seed);

  const { mutate: buyAccommodation } =
    api.property.createProperty.useMutation();
  const { mutate: transaction } = api.characters.transaction.useMutation();

  const numberOfOffers = Math.floor(rng() * 10);

  const offers = Array.from({ length: numberOfOffers }, (_, i) => {
    const cities = Object.keys(citiesByRegion) as Array<
      keyof typeof citiesByRegion
    >;

    const city = cities[Math.floor(rng() * cities.length)];

    const districts = citiesByRegion[city!];

    const districtAndPrice = districts[Math.floor(rng() * districts.length)]!;
    const district = districtAndPrice.district;
    const area = Math.floor(rng() * 100) + 50;
    const rooms = Math.floor(area / 29);
    const energyEfficiency = Math.floor(rng() * 100);
    const parkingPlace = rng() > 0.5;
    const floor = Math.floor(rng() * 10);
    const hasBalcony = floor === 0 ? 0 : rng() > 0.5;
    const balconyArea = hasBalcony ? Math.floor(rng() * 10) + 5 : 0;
    const intrinsicValue =
      (area * districtAndPrice.price * (1 + energyEfficiency / 1000) +
        (hasBalcony ? (balconyArea * districtAndPrice.price) / 4 : 0)) *
        (0.0618 * Math.log(floor + 1) + 0.953) +
      (parkingPlace ? 4 * districtAndPrice.price : 0);
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

    const name = `Byt ${rooms}+kk v lokalitě ${city}`;
    return {
      key: i,
      name,
      city,
      district,
      area,
      rooms,
      floor,
      energyEfficiencyCoeff,
      price,
      intrinsicValue,
      hasBalcony,
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
        type: "flat",
        area: offer.area,
        rooms: offer.rooms,
        floor: offer.floor,
        energyEfficiency: offer.energyEfficiencyCoeff,
        localityBonus: 0,
        playerLivesHere: false,
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

  return (
    <div className="h-full w-full">
      <div className="mb-10 ml-10 mr-24 mt-24 h-[460px] overflow-y-scroll">
        {offers.map((offer, i) => (
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
