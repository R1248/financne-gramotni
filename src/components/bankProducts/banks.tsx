import { useState, type FC } from "react";
import Image from "next/image";
import bankLogo1 from "../../../public/bank_logo_1.png";
import bankLogo2 from "../../../public/bank_logo_2.png";
import bankLogo3 from "../../../public/bank_logo_3.png";
import bankLogo4 from "../../../public/bank_logo_4.png";
import { TiArrowBack } from "react-icons/ti";
import {
  CurrentAccountPage,
  SavingAccountPage,
  BuildingSavingPage,
  PensionSavingPage,
  TermDepositPage,
  FundPage,
  ProductsMenu,
} from "./product";

const banks = [
  {
    image: bankLogo1,
    name: "Prosperita Credit",
    alt: "bankLogo1",
    description:
      "Přinášíme inovativní finanční řešení pro moderní život. Investujte s námi do vaší budoucnosti.",
  },
  {
    image: bankLogo2,
    name: "Soldius Bank",
    alt: "bankLogo2",
    description:
      "Vytváříme stabilní základy pro vaši budoucnost. Spojte se s námi a využijte finanční příležitosti.",
  },
  {
    image: bankLogo3,
    name: "Quantum A. G.",
    alt: "bankLogo3",
    description:
      "Bankovní partner pro každý okamžik života. Společně tvoříme finanční cestu k vašim cílům",
  },
  {
    image: bankLogo4,
    name: "Banka Novum",
    alt: "bankLogo4",
    description:
      "S námi máte finance pod kontrolou. Spolehněte se na partnera, který rozumí vašim potřebám.",
  },
];

type BanksProps = {
  setRouter: (router: string) => void;
};

const Banks: FC<BanksProps> = ({ setRouter }) => {
  const [banksRouter, setBanksRouter] = useState("menu");
  const [selectedBank, setSelectedBank] = useState("");
  return (
    <div className="relative flex h-auto flex-grow overflow-hidden rounded-2xl bg-white">
      {
        {
          menu: (
            <BanksMenu
              setSelectedBank={setSelectedBank}
              setBanksRouter={setBanksRouter}
              setRouter={setRouter}
            />
          ),
          bankPage: (
            <BankPage
              selectedBank={selectedBank}
              setBanksRouter={setBanksRouter}
            />
          ),
        }[banksRouter]
      }
    </div>
  );
};

type BanksMenuProps = {
  setSelectedBank: (bank: string) => void;
  setBanksRouter: (router: string) => void;
  setRouter: (router: string) => void;
};

const BanksMenu: FC<BanksMenuProps> = ({
  setSelectedBank,
  setBanksRouter,
  setRouter,
}) => {
  return (
    <div className="flex w-full items-center justify-center pt-10">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setRouter("home")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      {banks.map((bank) => {
        return (
          <div
            className="mx-2 w-60 rounded-sm border border-solid border-black"
            key={bank.alt}
          >
            <Image
              alt={bank.alt}
              src={bank.image}
              className="border-b border-solid border-black"
            />
            <div className="h-44 text-wrap text-center">
              <p className="mx-3 my-6 text-sm">{bank.description}</p>
              <button
                className="mt-4 w-auto rounded border border-solid border-black px-8 py-1"
                onClick={() => {
                  setSelectedBank(bank.name);
                  setBanksRouter("bankPage");
                }}
              >
                Navštívit banku
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

type BankPageProps = {
  setBanksRouter: (router: string) => void;
  selectedBank: string;
};

const BankPage: FC<BankPageProps> = ({ setBanksRouter, selectedBank }) => {
  const [bankPageRouter, setBankPageRouter] = useState("products");

  let bank: (typeof banks)[0];
  let bg: string;

  switch (selectedBank) {
    case "Prosperita Credit":
      bank = banks[0]!;
      bg = "bg-[#11082F]";
      break;
    case "Soldius Bank":
      bank = banks[1]!;
      bg = "bg-[#161A1E]";
      break;
    case "Quantum A. G.":
      bank = banks[2]!;
      bg = "bg-[#1D3B3C]";
      break;
    default:
      bank = banks[3]!;
      bg = "bg-[#FAFAFA]";
  }

  return (
    <div className="relative flex h-full w-full">
      <div className={`h-full ${bg}`}>
        <Image alt={bank.alt} src={bank.image} className="w-60 min-w-[240px]" />
      </div>
      {
        {
          products: (
            <ProductsMenu
              setBankPageRouter={setBankPageRouter}
              setBanksRouter={setBanksRouter}
            />
          ),
          "Běžný účet": (
            <CurrentAccountPage
              setBankPageRouter={setBankPageRouter}
              bank={bank.name}
            />
          ),
          "Spořící účet": (
            <SavingAccountPage
              setBankPageRouter={setBankPageRouter}
              bank={bank.name}
            />
          ),
          "Stavební spoření": (
            <BuildingSavingPage
              setBankPageRouter={setBankPageRouter}
              bank={bank.name}
            />
          ),
          "Penzijní spoření": (
            <PensionSavingPage
              setBankPageRouter={setBankPageRouter}
              bank={bank.name}
            />
          ),
          "Termínované vklady": (
            <TermDepositPage
              setBankPageRouter={setBankPageRouter}
              bank={bank.name}
            />
          ),
          "Investiční fondy": (
            <FundPage setBankPageRouter={setBankPageRouter} bank={bank.name} />
          ),
        }[bankPageRouter]
      }
    </div>
  );
};

export default Banks;
