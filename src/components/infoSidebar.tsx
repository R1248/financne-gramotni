import { type FC, useContext } from "react";
import { ProductsContext, UserDataContext } from "~/contexts/dataContexts";
import { api } from "~/utils/api";
import Portfolio from "~/components/portfolio";
import { FcOpenedFolder } from "react-icons/fc";

type InfoSidebarProps = {
  setRouter: (router: string) => void;
};

const InfoSidebar: FC<InfoSidebarProps> = ({ setRouter }) => {
  const userData = useContext(UserDataContext);
  const { mutate: changeAge } = api.userData.changeAge.useMutation();
  const { mutate: transaction } = api.products.transaction.useMutation();
  const { mutate: editStandingOrder } =
    api.products.editStandingOrder.useMutation();
  const products = useContext(ProductsContext);

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
    userData.money +
    freeMoney +
    buildingSavings +
    termDeposits +
    pensionSaving +
    funds;

  const utils = api.useUtils();
  const incrementAge = () => {
    changeAge(void 0, {
      onSuccess: () => {
        void utils.userData.getUserData.invalidate();
      },
    });
    products.map((product) => {
      const i = Math.pow(1 + product.interest, 1 / 12);
      let amount;
      if (i === 1) {
        amount = product.money - product.standingOrdersSent * 3;
      } else {
        amount =
          product.money * Math.pow(i, 3) +
          product.standingOrdersRec * i * ((Math.pow(i, 3) - 1) / (i - 1)) -
          (product.standingOrdersSent * i * (Math.pow(i, 3) - 1)) / (i - 1);
      }
      amount = Math.round(amount);
      transaction(
        {
          amount: amount,
          productId: product.id,
        },
        {
          onSuccess: () => {
            void utils.products.getAllProducts.invalidate();
            console.log("Age valuation completed");
          },
        },
      );
      if (product.duration) {
        if (product.ageCreated + product.duration === userData.age) {
          if (product.standingOrdersRec > 0) {
            editStandingOrder({
              amount: product.standingOrdersRec,
              productId: product.sendingAccountId,
            });
          }
          transaction({
            amount: product.standingOrdersRec,
            productId: product.sendingAccountId,
          });
        }
      }
    });
  };

  return (
    <div className="mr-3 flex w-96 min-w-[24rem] flex-col rounded-2xl bg-white">
      <h1 className="my-3 ml-3 text-3xl">{userData.name}</h1>
      <div className="mx-3 mb-3 flex flex-col border border-solid border-black p-3">
        <div className="mb-3 flex h-12 flex-col border border-solid border-black">
          <div className="flex flex-grow items-center">
            <p className="ml-2 text-2xl">Majetek:</p>
            <p className="ml-auto mr-2 text-2xl">{allMoney} Kč</p>
          </div>
          <div className="flex h-2 w-full border-t border-solid border-black">
            <div className="h-full w-2/5 bg-yellow-500"></div>
            <div className="h-full w-3/5 bg-blue-700"></div>
          </div>
        </div>
        <div className="mb-3 flex h-12 flex-col border border-solid border-black">
          <div className="flex flex-grow items-center">
            <p className="ml-2 text-2xl">Věk:</p>
            <p className="ml-auto mr-2 text-2xl">{userData.age}</p>
            <button
              className="flex h-full w-10 justify-center border-l border-solid border-black pt-3 text-3xl leading-3"
              onClick={incrementAge}
            >
              +
            </button>
          </div>
          <div className="flex h-2 w-full border-t border-solid border-black">
            <div className="h-full w-1/4 border-r border-solid border-black bg-blue-700"></div>
            <div className="h-full w-1/4 border-r border-solid border-black bg-blue-700"></div>
            <div className="h-full w-1/4 border-r border-solid border-black bg-blue-700"></div>
            <div className="h-full w-1/4"></div>
          </div>
        </div>
        <div className="flex h-12 flex-col border border-solid border-black">
          <div className="flex flex-grow items-center">
            <p className="ml-2 text-2xl">Pozice:</p>
            <p className="ml-auto mr-2 text-2xl">Finanční poradce</p>
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
          freeMoney={freeMoney + userData.money}
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
