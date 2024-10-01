import { type FC, useContext, useEffect, useState } from "react";
import { ProductsContext } from "~/contexts/productsContext";
import { CharacterContext } from "~/contexts/charactersContext";
import { api } from "~/utils/api";
import Portfolio from "~/components/portfolio/portfolio";
import { FcOpenedFolder } from "react-icons/fc";
import { IoIosMore } from "react-icons/io";
import { PropertyContext } from "~/contexts/propertyContext";
import { citiesMeterPrice } from "./personalFinance/offers";

type InfoSidebarProps = {
  setRouter: (router: string) => void;
};

const InfoSidebar: FC<InfoSidebarProps> = ({ setRouter }) => {
  const { mutate: changeAge } = api.characters.changeAge.useMutation();
  const { mutate: transaction } = api.products.transaction.useMutation();
  const { mutate: userTransaction } = api.characters.transaction.useMutation();
  const { mutate: updateStandingOrder } =
    api.characters.updateStandingOrder.useMutation();
  const { mutate: deleteProduct } = api.products.deleteProduct.useMutation();
  const { mutate: deleteProperty } = api.property.deleteProperty.useMutation();
  const products = useContext(ProductsContext);
  const character = useContext(CharacterContext);
  const properties = useContext(PropertyContext);
  const propertiesForSale = properties.filter(
    (property) => property.isForSale === true,
  );
  const characterId = character.id;

  const [filledDivs, setFilledDivs] = useState<number>(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const quarter = character.age % 1;

    if (quarter === 0) {
      setShowAll(true); // Temporarily show all divs
      setTimeout(() => {
        setFilledDivs(0); // Remove the fill after a brief delay
        setShowAll(false);
      }, 500); // 500ms delay
    } else if (quarter === 0.25) {
      setFilledDivs(1); // Fill 1 div
    } else if (quarter === 0.5) {
      setFilledDivs(2); // Fill 2 divs
    } else if (quarter === 0.75) {
      setFilledDivs(3); // Fill 3 divs
    }
  }, [character.age]);

  let freeMoney = 0;
  let buildingSavings = 0;
  let termDeposits = 0;
  let pensionSaving = 0;
  let funds = 0;

  products?.forEach((product) => {
    switch (product.type) {
      case "currentAccount":
        freeMoney += product.money;
        break;
      case "savingAccount":
        freeMoney += product.money;
        break;
      case "buildingSaving":
        buildingSavings += product.money;
        break;
      case "termDeposit":
        termDeposits += product.money;
        break;
      case "pensionSaving":
        pensionSaving += product.money;
        break;
      case "fund":
        funds += product.money;
        break;
    }
  });

  const allMoney =
    character.money +
    freeMoney +
    buildingSavings +
    termDeposits +
    pensionSaving +
    funds;

  const utils = api.useUtils();
  const incrementAge = () => {
    changeAge(
      { characterId },
      {
        onSuccess: () => {
          void utils.characters.getSelectedCharacter.invalidate();
        },
      },
    );
    userTransaction({
      sum: -3 * character.standingOrdersSent,
      characterId,
    });
    const randomShock =
      Math.sqrt(-2.0 * Math.log(Math.random())) *
      Math.cos(2.0 * Math.PI * Math.random());
    products.map((product) => {
      const i = Math.pow(
        1 + (product.interest + product.volatility * randomShock),
        1 / 12,
      );
      let amount;
      let governmentSupport = 0;
      if (product.type === "pensionSaving") {
        product.standingOrdersRec * 12 * 0.2 > 340
          ? (governmentSupport = 340)
          : (governmentSupport = product.standingOrdersRec * 12 * 0.2);
      }
      if (product.type === "buildingSaving") {
        product.standingOrdersRec * 12 * 0.05 > 1000
          ? (governmentSupport = 1000)
          : (governmentSupport = product.standingOrdersRec * 12 * 0.05);
      }
      if (i === 1) {
        amount = product.money - product.standingOrdersSent * 3;
      } else {
        amount =
          product.money * Math.pow(i, 3) +
          product.standingOrdersRec * i * ((Math.pow(i, 3) - 1) / (i - 1)) -
          (product.standingOrdersSent * i * (Math.pow(i, 3) - 1)) / (i - 1);
        if (character.age % 1 === 0.75) {
          amount += governmentSupport;
        }
      }
      amount = Math.round(amount);
      transaction(
        {
          amount,
          productId: product.id,
        },
        {
          onSuccess: () => {
            void utils.products.getAllProducts.invalidate();
          },
        },
      );
      if (product.duration) {
        if (
          product.ageCreated + product.duration / 12 - 0.25 ===
          character.age
        ) {
          userTransaction(
            {
              sum: amount,
              characterId,
            },
            {
              onSuccess: () => {
                void utils.characters.getSelectedCharacter.invalidate();
              },
            },
          );
          updateStandingOrder({
            amount: -product.standingOrdersRec,
            characterId,
          });
          deleteProduct(
            {
              productId: product.id,
            },
            {
              onSuccess: () => {
                void utils.products.getAllProducts.invalidate();
              },
            },
          );
        }
      }
    });
    console.log(propertiesForSale);
    propertiesForSale.map((property) => {
      //function that will have a chance to sell property. The chance is based on the price and intrinsic value of the property
      const cityMeterPrice = citiesMeterPrice.find(
        (c) => c.city === property.city,
      )!.price;
      const intrinsicValue =
        (property.area *
          cityMeterPrice *
          (1 + property.energyEfficiency / 1000) +
          (property.balconyArea * cityMeterPrice) / 4) *
          (0.0618 * Math.log(property.floor + 1) + 0.953) +
        property.parkingPlaces * 4 * cityMeterPrice;
      const priceDifference =
        (property.sellsFor! - intrinsicValue) / intrinsicValue;
      //const probability = -0.33 * Math.atan(20 * priceDifference + 0.048) + 0.5;
      const probability = 1 / (1 + Math.exp(15 * priceDifference));
      console.log(priceDifference, intrinsicValue, probability);
      if (Math.random() < probability) {
        userTransaction(
          {
            sum: property.sellsFor!,
            characterId,
          },
          {
            onSuccess: () => {
              void utils.characters.getSelectedCharacter.invalidate();
            },
          },
        );
        deleteProperty(
          {
            propertyId: property.id,
          },
          {
            onSuccess: () => {
              void utils.property.getAllProperties.invalidate();
            },
          },
        );
      }
    });
  };

  return (
    <div className="mr-3 flex w-96 min-w-[24rem] flex-col rounded-2xl bg-white">
      <h1 className="my-3 ml-3 text-3xl">{character.name}</h1>
      <div className="mx-3 mb-3 flex flex-col border border-solid border-black p-3">
        <div className="mb-3 flex h-12 flex-col border border-solid border-black">
          <div className="flex flex-grow items-center">
            <p className="ml-2 text-2xl">Majetek:</p>
            <p className="ml-auto mr-2 text-2xl">{allMoney} Kč</p>
          </div>
          <div className="flex h-2 w-full border-t border-solid border-black">
            <div
              className="h-full bg-yellow-500"
              style={{
                width: `${(100 * (character.money + freeMoney)) / allMoney}%`,
              }}
            ></div>
            <div
              className="h-full bg-blue-700"
              style={{
                width: `${
                  100 - (100 * (character.money + freeMoney)) / allMoney
                }%`,
              }}
            ></div>
          </div>
        </div>
        <div className="mb-3 flex h-12 flex-col border border-solid border-black">
          <div className="flex flex-grow items-center">
            <p className="ml-2 text-2xl">Věk:</p>
            <p className="ml-auto mr-2 text-2xl">{character.age}</p>
            <button
              className="flex h-full w-10 justify-center border-l border-solid border-black pt-3 text-3xl leading-3"
              onClick={incrementAge}
            >
              +
            </button>
          </div>
          <div className="flex h-2 w-full border-t border-solid border-black">
            <div
              className={`h-full w-1/4 border-r border-solid border-black ${
                filledDivs >= 1 || showAll ? "bg-blue-700" : ""
              }`}
            ></div>
            <div
              className={`h-full w-1/4 border-r border-solid border-black ${
                filledDivs >= 2 || showAll ? "bg-blue-700" : ""
              }`}
            ></div>
            <div
              className={`h-full w-1/4 border-r border-solid border-black ${
                filledDivs >= 3 || showAll ? "bg-blue-700" : ""
              }`}
            ></div>
            <div
              className={`h-full w-1/4 border-solid border-black ${
                showAll ? "bg-blue-700" : ""
              }`}
            ></div>
          </div>
        </div>
        <div className="flex h-12 flex-col border border-solid border-black">
          <div className="flex flex-grow items-center">
            <p className="ml-2 text-2xl">Pozice:</p>
            <p className="ml-auto mr-2 text-2xl">Finanční poradce</p>
            <button
              className="flex h-full w-10 justify-center border-l border-solid border-black pt-3 text-3xl leading-3"
              onClick={() => setRouter("workOpportunities")}
            >
              <IoIosMore className="mt-[-4px] text-2xl" />
            </button>
          </div>
          <div className="h-2 w-full border-t border-solid border-black">
            <div className="h-full w-1/3 bg-gradient-to-r from-blue-400 to-blue-700"></div>
          </div>
        </div>
      </div>
      <div className="relative mx-3 mb-5 mt-auto flex flex-grow flex-col border border-solid border-black p-3">
        <div className="flex h-9 w-full flex-row">
          <h1 className="text-2xl">Portfolio</h1>
        </div>
        <Portfolio
          freeMoney={freeMoney + character.money}
          termDeposits={termDeposits}
          buildingSavings={buildingSavings}
          pensionSaving={pensionSaving}
          funds={funds}
        />
        <button
          className="absolute bottom-2 right-2 rounded border border-solid border-black p-2 text-4xl"
          onClick={() => setRouter("portfolio")}
        >
          <FcOpenedFolder />
        </button>
      </div>
    </div>
  );
};

export default InfoSidebar;
