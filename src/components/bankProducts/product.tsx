import { useContext, useState, type FC } from "react";
import productImage from "../../../public/product.png";
import Image from "next/image";
import { TiArrowBack } from "react-icons/ti";
import {
  ProsperitaCreditProducts,
  BankaNovumProducts,
  QuantumAGProducts,
  SoldiusBankProducts,
} from "../../bankingProducts";
import { api } from "~/utils/api";
import { UserDataContext } from "~/contexts/dataContexts";

type ProductComponentProps = {
  name: string;
  setBankPageRouter: (router: string) => void;
};

export const ProductCard: FC<ProductComponentProps> = ({
  name,
  setBankPageRouter,
}) => {
  return (
    <button
      className="m-4 h-48 w-48 overflow-hidden rounded-lg border border-solid border-black"
      onClick={() => setBankPageRouter(name)}
    >
      <div className="w-full">
        <Image alt="product" src={productImage} />
      </div>
      <div className="mt-4 h-full w-full text-center">{name}</div>
    </button>
  );
};

type ProductsMenuProps = {
  setBanksRouter: (router: string) => void;
  setBankPageRouter: (router: string) => void;
};

export const ProductsMenu: FC<ProductsMenuProps> = ({
  setBanksRouter,
  setBankPageRouter,
}) => {
  return (
    <div className="relative w-full pl-[72px]">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBanksRouter("menu")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      <div className="px-auto mt-24 flex w-full">
        <ProductCard name="Běžný účet" setBankPageRouter={setBankPageRouter} />
        <ProductCard
          name="Spořící účet"
          setBankPageRouter={setBankPageRouter}
        />
        <ProductCard
          name="Stavební spoření"
          setBankPageRouter={setBankPageRouter}
        />
      </div>
      <div className="flex w-full">
        <ProductCard
          name="Penzijní spoření"
          setBankPageRouter={setBankPageRouter}
        />
        <ProductCard
          name="Termínované vklady"
          setBankPageRouter={setBankPageRouter}
        />
        <ProductCard
          name="Investiční fondy"
          setBankPageRouter={setBankPageRouter}
        />
      </div>
    </div>
  );
};

type ProductPageProps = {
  setBankPageRouter: (router: string) => void;
  bank: string;
};

type CashSliderProps = {
  min: number;
  max: number;
  step?: number;
  initialAmount?: number;
  onValueChange: (value: number) => void;
};

const CashSlider: FC<CashSliderProps> = ({
  min,
  max,
  step = 1,
  initialAmount = min,
  onValueChange,
}) => {
  const [amount, setAmount] = useState<number>(initialAmount);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setAmount(value);
    onValueChange(value);
  };

  return (
    <div className="w-full max-w-md p-4">
      <h2 className="mb-4 text-lg font-semibold text-gray-700">
        Nastavte základní vklad
      </h2>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={amount}
        onChange={handleSliderChange}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-blue-200"
      />
      <div className="mt-2 flex justify-between text-gray-600">
        <span>Kč{min.toFixed(2)}</span>
        <span>Kč{amount.toFixed(2)}</span>
        <span>Kč{max.toFixed(2)}</span>
      </div>
    </div>
  );
};

export const CurrentAccountPage: FC<ProductPageProps> = ({
  setBankPageRouter,
  bank,
}) => {
  const userData = useContext(UserDataContext);
  let currentAccount;
  switch (bank) {
    case "Prosperita Credit":
      currentAccount = ProsperitaCreditProducts.currentAccount[0]!;
      break;
    case "Banka Novum":
      currentAccount = BankaNovumProducts.currentAccount[0]!;
      break;
    case "Quantum A. G.":
      currentAccount = QuantumAGProducts.currentAccount[0]!;
      break;
    default:
      currentAccount = SoldiusBankProducts.currentAccount[0]!;
      break;
  }

  const [money, setMoney] = useState(0);

  const { mutate: createCurrentAccount } =
    api.products.createProduct.useMutation();
  const { mutate: changeMoney } = api.userData.transaction.useMutation();

  const utils = api.useUtils();

  const createCurrentAccountHandler = () => {
    const data = {
      name: currentAccount.name,
      type: "currentAccount",
      interest: currentAccount.interest,
      money: money,
      bank: bank,
      withdrawFee: 0,
      description: currentAccount.description,
      ageCreated: userData.age,
      volatility: 0,
      standingOrderPossible: false,
      cashManipulationPossible: true,
    };
    createCurrentAccount(data, {
      onSuccess: () => {
        void utils.products.getAllProducts.invalidate();
      },
    });
    changeMoney(
      { sum: -money },
      {
        onSuccess: () => {
          void utils.userData.getUserData.invalidate();
        },
      },
    );
  };

  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBankPageRouter("products")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      <div className="relative mt-16 h-[70%] w-3/4 rounded-lg border border-solid border-black p-4">
        <h1 className="text-2xl">{currentAccount?.name}</h1>
        <p className="mt-2 w-96">{currentAccount?.description}</p>
        <p className="mt-2 text-lg">Úrok: {currentAccount?.interest}</p>
        <CashSlider onValueChange={setMoney} min={0} max={userData.money} />
        <button
          className="absolute bottom-5 right-5 rounded border border-solid border-black px-4 py-1"
          onClick={createCurrentAccountHandler}
        >
          Sjednat
        </button>
      </div>
    </div>
  );
};

export const SavingAccountPage: FC<ProductPageProps> = ({
  setBankPageRouter,
  bank,
}) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBankPageRouter("products")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
    </div>
  );
};

export const BuildingSavingPage: FC<ProductPageProps> = ({
  setBankPageRouter,
  bank,
}) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBankPageRouter("products")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
    </div>
  );
};

export const PensionSavingPage: FC<ProductPageProps> = ({
  setBankPageRouter,
  bank,
}) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBankPageRouter("products")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
    </div>
  );
};

export const TermDepositPage: FC<ProductPageProps> = ({
  setBankPageRouter,
  bank,
}) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBankPageRouter("products")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
    </div>
  );
};

export const FundPage: FC<ProductPageProps> = ({ setBankPageRouter, bank }) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBankPageRouter("products")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
    </div>
  );
};

/*
type ProductPageProps = {
  setBankPageRouter: (router: string) => void;
  productsOffered:
    | {
        name: string;
        type: string;
        volatility: number;
        interest: number;
        description: string;
      }[]
    | {
        name: string;
        type: string;
        minimumDeposit: number;
        volatility: number;
        interest: number[];
        duration: number[];
        description: string;
      }[];
};

export const ProductPage: FC<ProductPageProps> = ({
  setBankPageRouter,
  productsOffered,
}) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBankPageRouter("products")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      {productsOffered.length === 0 ? (
        <div>Banka tento produkt nenabízí</div>
      ) : productsOffered.length === 1 ? (
        <div className="relative mt-16 h-[70%] w-3/4 rounded-lg border border-solid border-black p-4">
          <h1 className="text-2xl">{productsOffered[0]?.name}</h1>
          <p className="mt-2 w-96">{productsOffered[0]?.description}</p>
          {productsOffered[0]?.volatility === 0 ? (
            <p className="mt-2 text-lg">Úrok: {productsOffered[0].interest}</p>
          ) : (
            <p className="mt-2 text-lg">
              Očekávaný výnos: {productsOffered[0]?.interest}
            </p>
          )}
          <button className="absolute bottom-5 right-5 rounded border border-solid border-black px-4 py-1">
            Sjednat
          </button>
        </div>
      ) : (
        <ProductWithMoreOptions productsOffered={productsOffered} />
      )}
    </div>
  );
};

type ProductWithMoreOptionsProps = {
  productsOffered:
    | {
        name: string;
        type: string;
        volatility: number;
        interest: number;
        description: string;
      }[]
    | {
        name: string;
        type: string;
        minimumDeposit: number;
        volatility: number;
        interest: number[];
        duration: number[];
        description: string;
      }[];
};

const ProductWithMoreOptions: FC<ProductWithMoreOptionsProps> = ({
  productsOffered,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(productsOffered[0]);
  return (
    <div className="relative mt-16 h-[70%] w-3/4 rounded-lg border border-solid border-black">
      <div className="flex h-10 w-full flex-row p-4">
        <div className="ml-auto">
          <select
            className="rounded border border-solid border-black p-1"
            onChange={(e) =>
              setSelectedProduct(
                productsOffered.find(
                  (product) => product.name === e.target.value,
                ),
              )
            }
          >
            {productsOffered.map((product) => (
              <option key={product.name} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <h1 className="ml-4 mt-4 text-2xl">{selectedProduct?.name}</h1>
      <p className="ml-4 mt-2 w-96">{selectedProduct?.description}</p>
      <button className="absolute bottom-5 right-5 rounded border border-solid border-black px-4 py-1">
        Sjednat
      </button>
    </div>
  );
};
*/
