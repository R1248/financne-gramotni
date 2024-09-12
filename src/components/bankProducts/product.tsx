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
import lockImage from "../../../public/lock.png";

type ProductComponentProps = {
  name: string;
  setBankPageRouter: (router: string) => void;
  disabled: boolean;
};

export const ProductCard: FC<ProductComponentProps> = ({
  name,
  setBankPageRouter,
  disabled,
}) => {
  return (
    <button
      className="m-4 h-48 w-48 overflow-hidden rounded-lg border border-solid border-black"
      onClick={() => setBankPageRouter(name)}
      disabled={disabled}
    >
      <div className="relative w-full">
        <Image alt="product" src={productImage} />
        {disabled ? (
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-gray-200/50">
            <Image
              alt="lock"
              src={lockImage}
              className="absolute left-0 top-0 z-20"
            />
          </div>
        ) : null}
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
  const userData = useContext(UserDataContext);

  return (
    <div className="relative w-full pl-[72px]">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBanksRouter("menu")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      <div className="px-auto mt-24 flex w-full">
        <ProductCard
          name="Spořící účet"
          setBankPageRouter={setBankPageRouter}
          disabled={userData.productsScore < 1}
        />
        <ProductCard
          name="Stavební spoření"
          setBankPageRouter={setBankPageRouter}
          disabled={userData.productsScore < 2}
        />
        <ProductCard
          name="Penzijní spoření"
          setBankPageRouter={setBankPageRouter}
          disabled={userData.productsScore < 3}
        />
      </div>
      <div className="flex w-full">
        <ProductCard
          name="Termínované vklady"
          setBankPageRouter={setBankPageRouter}
          disabled={userData.productsScore < 4}
        />
        <ProductCard
          name="Investiční fondy"
          setBankPageRouter={setBankPageRouter}
          disabled={userData.productsScore < 5}
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
  heading: string;
};

const CashSlider: FC<CashSliderProps> = ({
  min,
  max,
  step = 1,
  initialAmount = min,
  heading,
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
      <h2 className="mb-4 text-lg font-semibold text-gray-700">{heading}</h2>
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
      money,
      bank,
      name: currentAccount.name,
      type: "currentAccount",
      interest: currentAccount.interest,
      description: currentAccount.description,
      ageCreated: userData.age,
      volatility: 0,
      standingOrdersSent: 0,
      standingOrdersRec: 0,
      sendingAccountId: "",
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
        <p className="mt-2 w-[600px]">{currentAccount?.description}</p>
        <p className="mt-2 text-lg">Úrok: {currentAccount?.interest}</p>
        <CashSlider
          onValueChange={setMoney}
          min={0}
          max={userData.money}
          heading="Nastavte základní vklad"
        />
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
  let savingAccounts;
  switch (bank) {
    case "Prosperita Credit":
      savingAccounts = ProsperitaCreditProducts.savingAccounts;
      break;
    case "Banka Novum":
      savingAccounts = BankaNovumProducts.savingAccounts;
      break;
    case "Quantum A. G.":
      savingAccounts = QuantumAGProducts.savingAccounts;
      break;
    default:
      savingAccounts = SoldiusBankProducts.savingAccounts;
      break;
  }
  const userData = useContext(UserDataContext);
  const [selectedProduct, setSelectedProduct] = useState(savingAccounts[0]);
  const [money, setMoney] = useState(0);

  const { mutate: createSavingAccount } =
    api.products.createProduct.useMutation();
  const { mutate: changeMoney } = api.userData.transaction.useMutation();

  const utils = api.useUtils();

  const createSavingAccountHandler = () => {
    const data = {
      money,
      bank,
      name: selectedProduct!.name,
      type: "savingAccount",
      interest: selectedProduct!.interest,
      description: selectedProduct!.description,
      ageCreated: userData.age,
      volatility: 0,
      standingOrdersSent: 0,
      standingOrdersRec: 0,
      sendingAccountId: "",
    };
    createSavingAccount(data, {
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
      {savingAccounts.length === 0 ? (
        <div>Banka tento produkt nenabízí</div>
      ) : savingAccounts.length === 1 ? (
        <div className="relative mt-16 h-[70%] w-3/4 rounded-lg border border-solid border-black p-4">
          <h1 className="text-2xl">{savingAccounts[0]?.name}</h1>
          <p className="mt-2 w-[600px]">{savingAccounts[0]?.description}</p>
          <p className="mt-2 text-lg">Úrok: {savingAccounts[0]?.interest}</p>
          <CashSlider
            onValueChange={setMoney}
            min={0}
            max={userData.money}
            heading={"Nastavte základní vklad"}
          />
          <button
            className="absolute bottom-5 right-5 rounded border border-solid border-black px-4 py-1"
            onClick={createSavingAccountHandler}
          >
            Sjednat
          </button>
        </div>
      ) : (
        <div className="relative mt-16 h-[70%] w-3/4 rounded-lg border border-solid border-black p-4">
          <div className="flex h-10 w-full flex-row px-4">
            <div className="ml-auto">
              <select
                className="rounded border border-solid border-black p-1"
                onChange={(e) =>
                  setSelectedProduct(
                    savingAccounts.find(
                      (product) => product.name === e.target.value,
                    ),
                  )
                }
              >
                {savingAccounts.map((product) => (
                  <option key={product.name} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h1 className="ml-4 mt-4 text-2xl">{selectedProduct?.name}</h1>
          <p className="ml-4 mt-2 w-[600px]">{selectedProduct?.description}</p>
          <CashSlider
            onValueChange={setMoney}
            min={0}
            max={userData.money}
            heading={"Nastavte základní vklad"}
          />
          <button
            className="absolute bottom-5 right-5 rounded border border-solid border-black px-4 py-1"
            onClick={createSavingAccountHandler}
          >
            Sjednat
          </button>
        </div>
      )}
    </div>
  );
};

export const BuildingSavingPage: FC<ProductPageProps> = ({
  setBankPageRouter,
  bank,
}) => {
  let buildingSavings;
  switch (bank) {
    case "Prosperita Credit":
      buildingSavings = ProsperitaCreditProducts.buildingSavings;
      break;
    case "Banka Novum":
      buildingSavings = BankaNovumProducts.buildingSavings;
      break;
    case "Quantum A. G.":
      buildingSavings = QuantumAGProducts.buildingSavings;
      break;
    default:
      buildingSavings = SoldiusBankProducts.buildingSavings;
      break;
  }

  const userData = useContext(UserDataContext);
  const [selectedProduct, setSelectedProduct] = useState(buildingSavings[0]);
  const [money, setMoney] = useState(100);

  const { mutate: createBuildingSaving } =
    api.products.createProduct.useMutation();
  const { mutate: updateStandingOrder } =
    api.userData.updateStandingOrder.useMutation();

  const utils = api.useUtils();

  const createBuildingSavingHandler = () => {
    const data = {
      name: selectedProduct!.name,
      type: "buildingSaving",
      interest: selectedProduct!.interest,
      money: 0,
      bank: bank,
      duration: 72,
      description: selectedProduct!.description,
      ageCreated: userData.age,
      volatility: 0,
      standingOrdersSent: 0,
      standingOrdersRec: money,
    };
    updateStandingOrder(
      { amount: money },
      {
        onSuccess: () => {
          void utils.userData.getUserData.invalidate();
        },
      },
    );
    createBuildingSaving(data, {
      onSuccess: () => {
        void utils.products.getAllProducts.invalidate();
      },
    });
  };

  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBankPageRouter("products")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      {buildingSavings.length === 0 ? (
        <div>Banka tento produkt nenabízí</div>
      ) : buildingSavings.length === 1 ? (
        <div className="relative mt-16 h-[70%] w-3/4 rounded-lg border border-solid border-black p-4">
          <h1 className="text-2xl">{buildingSavings[0]?.name}</h1>
          <p className="mt-2 w-[600px]">{buildingSavings[0]?.description}</p>
          <p className="mt-2 text-lg">Úrok: {buildingSavings[0]?.interest}</p>
          <CashSlider
            onValueChange={setMoney}
            min={100}
            max={10000}
            heading={"Nastavte průběžný vklad"}
          />

          <button
            className="absolute bottom-5 right-5 rounded border border-solid border-black px-4 py-1"
            onClick={createBuildingSavingHandler}
          >
            Sjednat
          </button>
        </div>
      ) : (
        <div className="relative mt-16 h-[70%] w-3/4 rounded-lg border border-solid border-black p-4">
          <div className="flex h-10 w-full flex-row px-4">
            <div className="ml-auto">
              <select
                className="rounded border border-solid border-black p-1"
                onChange={(e) =>
                  setSelectedProduct(
                    buildingSavings.find(
                      (product) => product.name === e.target.value,
                    ),
                  )
                }
              >
                {buildingSavings.map((product) => (
                  <option key={product.name} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h1 className="ml-4 mt-4 text-2xl">{selectedProduct?.name}</h1>
          <p className="ml-4 mt-2 w-[600px]">{selectedProduct?.description}</p>
          <CashSlider
            onValueChange={setMoney}
            min={100}
            max={10000}
            heading="Nastavte průběžný vklad"
          />

          <button
            className="absolute bottom-5 right-5 rounded border border-solid border-black px-4 py-1"
            onClick={createBuildingSavingHandler}
          >
            Sjednat
          </button>
        </div>
      )}
    </div>
  );
};

export const PensionSavingPage: FC<ProductPageProps> = ({
  setBankPageRouter,
  bank,
}) => {
  let pensionSavings;
  switch (bank) {
    case "Prosperita Credit":
      pensionSavings = ProsperitaCreditProducts.pensionSavings;
      break;
    case "Banka Novum":
      pensionSavings = BankaNovumProducts.pensionSavings;
      break;
    case "Quantum A. G.":
      pensionSavings = QuantumAGProducts.pensionSavings;
      break;
    default:
      pensionSavings = SoldiusBankProducts.pensionSavings;
      break;
  }

  const userData = useContext(UserDataContext);
  const [selectedProduct, setSelectedProduct] = useState(pensionSavings[0]);
  const [money, setMoney] = useState(100);

  const { mutate: createPensionSaving } =
    api.products.createProduct.useMutation();
  const { mutate: updateStandingOrder } =
    api.userData.updateStandingOrder.useMutation();

  const utils = api.useUtils();

  const createPensionSavingHandler = () => {
    const data = {
      name: selectedProduct!.name,
      type: "pensionSaving",
      interest: selectedProduct!.interest,
      money: 0,
      bank: bank,
      duration: 0,
      description: selectedProduct!.description,
      ageCreated: userData.age,
      volatility: selectedProduct!.volatility,
      standingOrdersSent: 0,
      standingOrdersRec: money,
    };
    updateStandingOrder({ amount: money });
    createPensionSaving(data, {
      onSuccess: () => {
        void utils.products.getAllProducts.invalidate();
      },
    });
  };

  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBankPageRouter("products")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      {pensionSavings.length === 0 ? (
        <div>Banka tento produkt nenabízí</div>
      ) : pensionSavings.length === 1 ? (
        <div className="relative mt-16 h-[70%] w-3/4 rounded-lg border border-solid border-black p-4">
          <h1 className="text-2xl">{pensionSavings[0]?.name}</h1>
          <p className="mt-2 w-[600px]">{pensionSavings[0]?.description}</p>
          <p className="mt-2 text-lg">Úrok: {pensionSavings[0]?.interest}</p>
          <CashSlider
            onValueChange={setMoney}
            min={100}
            max={5000}
            heading={"Nastavte průběžný vklad"}
          />

          <button
            className="absolute bottom-5 right-5 rounded border border-solid border-black px-4 py-1"
            onClick={createPensionSavingHandler}
          >
            Sjednat
          </button>
        </div>
      ) : (
        <div className="relative mt-16 h-[70%] w-3/4 rounded-lg border border-solid border-black p-4">
          <div className="flex h-10 w-full flex-row px-4">
            <div className="ml-auto">
              <select
                className="rounded border border-solid border-black p-1"
                onChange={(e) =>
                  setSelectedProduct(
                    pensionSavings.find(
                      (product) => product.name === e.target.value,
                    ),
                  )
                }
              >
                {pensionSavings.map((product) => (
                  <option key={product.name} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h1 className="text-2xl">{selectedProduct?.name}</h1>
          <p className="mt-2 w-[600px]">{selectedProduct?.description}</p>
          <CashSlider
            onValueChange={setMoney}
            min={100}
            max={5000}
            heading="Nastavte základní vklad"
          />

          <button
            className="absolute bottom-5 right-5 rounded border border-solid border-black px-4 py-1"
            onClick={createPensionSavingHandler}
          >
            Sjednat
          </button>
        </div>
      )}
    </div>
  );
};

export const TermDepositPage: FC<ProductPageProps> = ({
  setBankPageRouter,
  bank,
}) => {
  let termDeposits;
  switch (bank) {
    case "Prosperita Credit":
      termDeposits = ProsperitaCreditProducts.termDeposits;
      break;
    case "Banka Novum":
      termDeposits = BankaNovumProducts.termDeposits;
      break;
    case "Quantum A. G.":
      termDeposits = QuantumAGProducts.termDeposits;
      break;
    default:
      termDeposits = SoldiusBankProducts.termDeposits;
      break;
  }

  const userData = useContext(UserDataContext);
  const [selectedProduct, setSelectedProduct] = useState(termDeposits[0]);
  const [money, setMoney] = useState(termDeposits[0]!.minimumDeposit);

  const { mutate: createTermDeposit } =
    api.products.createProduct.useMutation();
  const { mutate: transaction } = api.userData.transaction.useMutation();

  const utils = api.useUtils();

  const createTermDepositHandler = () => {
    const data = {
      name: selectedProduct!.name,
      type: "termDeposit",
      interest: selectedProduct!.interest,
      money: money,
      bank: bank,
      duration: selectedProduct!.duration,
      description: selectedProduct!.description,
      ageCreated: userData.age,
      volatility: 0,
      standingOrdersSent: 0,
      standingOrdersRec: 0,
    };
    transaction(
      { sum: -money },
      {
        onSuccess: () => {
          void utils.userData.getUserData.invalidate();
        },
      },
    );
    createTermDeposit(data, {
      onSuccess: () => {
        void utils.products.getAllProducts.invalidate();
      },
    });
  };

  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBankPageRouter("products")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      <div className="relative my-auto h-[90%] w-3/4 rounded-lg border border-solid border-black p-4">
        <div className="flex h-10 w-full flex-row">
          <div className="ml-auto">
            <select
              className="rounded border border-solid border-black p-1"
              onChange={(e) =>
                setSelectedProduct(
                  termDeposits.find(
                    (product) => product.name === e.target.value,
                  ),
                )
              }
            >
              {termDeposits.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h1 className="text-2xl">{selectedProduct?.name}</h1>
        <p className="mt-2 w-[600px]">{selectedProduct?.description}</p>
        <p className="mt-2 text-lg">Úrok: {selectedProduct?.interest}</p>
        <p className="mt-2 text-lg">
          Doba trvání: {selectedProduct?.duration} měsíců
        </p>
        <CashSlider
          onValueChange={setMoney}
          min={selectedProduct!.minimumDeposit}
          max={30000000}
          heading={"Nastavte základní vklad"}
        />
        <button
          className="absolute bottom-5 right-5 rounded border border-solid border-black px-4 py-1"
          onClick={createTermDepositHandler}
        >
          Sjednat
        </button>
      </div>
    </div>
  );
};

export const FundPage: FC<ProductPageProps> = ({ setBankPageRouter, bank }) => {
  let funds;
  switch (bank) {
    case "Prosperita Credit":
      funds = ProsperitaCreditProducts.investmentFunds;
      break;
    case "Banka Novum":
      funds = BankaNovumProducts.investmentFunds;
      break;
    case "Quantum A. G.":
      funds = QuantumAGProducts.investmentFunds;
      break;
    default:
      funds = SoldiusBankProducts.investmentFunds;
      break;
  }

  const userData = useContext(UserDataContext);
  const [selectedProduct, setSelectedProduct] = useState(funds[0]);
  const [money, setMoney] = useState(0);
  const [standingMoney, setStandingMoney] = useState(0);

  const { mutate: createFund } = api.products.createProduct.useMutation();
  const { mutate: transaction } = api.userData.transaction.useMutation();
  const { mutate: updateStandingOrder } =
    api.userData.updateStandingOrder.useMutation();

  const utils = api.useUtils();

  const createTermDepositHandler = () => {
    const data = {
      name: selectedProduct!.name,
      type: "fund",
      interest: selectedProduct!.interest,
      money: money,
      bank: bank,
      duration: 0,
      description: selectedProduct!.description,
      ageCreated: userData.age,
      volatility: selectedProduct!.volatility,
      standingOrdersSent: 0,
      standingOrdersRec: standingMoney,
    };
    createFund(data, {
      onSuccess: () => {
        void utils.products.getAllProducts.invalidate();
      },
    });
    updateStandingOrder({ amount: standingMoney });
    transaction(
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
      <div className="relative mx-auto h-[90%] w-3/4 rounded-lg border border-solid border-black p-4">
        <div className="flex h-10 w-full flex-row">
          <div className="ml-auto">
            <select
              className="rounded border border-solid border-black p-1"
              onChange={(e) =>
                setSelectedProduct(
                  funds.find((product) => product.name === e.target.value),
                )
              }
            >
              {funds.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h1 className="text-2xl">{selectedProduct?.name}</h1>
        <p className="mt-2 w-[600px]">{selectedProduct?.description}</p>
        <p className="mt-2 text-lg">
          Očekávaný výnos {selectedProduct?.interest}
        </p>
        <CashSlider
          onValueChange={setMoney}
          min={500}
          max={10000000}
          heading={"Nastavte základní vklad"}
        />
        <CashSlider
          onValueChange={setStandingMoney}
          min={0}
          max={10000}
          heading={"Nastavte průběžný vklad"}
        />
        <button
          className="absolute bottom-5 right-5 rounded border border-solid border-black px-4 py-1"
          onClick={createTermDepositHandler}
        >
          Sjednat
        </button>
      </div>
    </div>
  );
};
