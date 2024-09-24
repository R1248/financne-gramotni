import { useContext, useMemo, useState, type FC } from "react";
import { TiArrowBack } from "react-icons/ti";
import { ProductsContext } from "~/contexts/productsContext";
import { type Product } from "@prisma/client";
import { FaRegEdit } from "react-icons/fa";
import { api } from "~/utils/api";
import { CharacterContext } from "~/contexts/charactersContext";

type PortfolioPageProps = {
  setRouter: (router: string) => void;
};

const PortfolioPage: FC<PortfolioPageProps> = ({ setRouter }) => {
  const [portfolioRouter, setPortfolioRouter] = useState("menu");
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  return (
    <div className="relative flex h-auto flex-grow overflow-hidden rounded-2xl bg-white">
      {
        {
          menu: (
            <PortfolioMenu
              setRouter={setRouter}
              setPortfolioRouter={setPortfolioRouter}
              setSelectedProduct={setSelectedProduct}
            />
          ),
          productExpand: (
            <PortfolioProductExpand
              setPortfolioRouter={setPortfolioRouter}
              selectedProduct={selectedProduct}
            />
          ),
        }[portfolioRouter]
      }
    </div>
  );
};

export default PortfolioPage;

type PortfolioProductExpandProps = {
  setPortfolioRouter: (router: string) => void;
  selectedProduct: Product | undefined;
};

const PortfolioProductExpand: FC<PortfolioProductExpandProps> = ({
  setPortfolioRouter,
  selectedProduct,
}) => {
  const { mutate: deleteProduct } = api.products.deleteProduct.useMutation();
  const { mutate: transaction } = api.characters.transaction.useMutation();
  const { mutate: updateStandingOrder } =
    api.characters.updateStandingOrder.useMutation();

  const characterId = useContext(CharacterContext).id;

  const utils = api.useUtils();

  const closeProduct = () => {
    updateStandingOrder(
      { amount: -selectedProduct!.standingOrdersRec, characterId },
      {
        onSuccess: () => {
          transaction(
            { sum: selectedProduct!.money, characterId },
            {
              onSuccess: () => {
                void utils.characters.getSelectedCharacter
                  .invalidate()
                  .then(() => {
                    deleteProduct(
                      { productId: selectedProduct!.id },
                      {
                        onSuccess: () => {
                          void utils.products.getAllProducts.invalidate();
                          setPortfolioRouter("menu");
                        },
                      },
                    );
                  });
              },
            },
          );
        },
      },
    );
  };

  return (
    <div className="flex w-full items-center justify-center px-48 py-24">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setPortfolioRouter("menu")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      <div className="relative flex h-full w-full flex-col rounded border border-solid border-black p-5">
        <h1 className="mb-2 text-xl">
          {selectedProduct ? selectedProduct.name : ""}
        </h1>
        <p>Zřizovatel: {selectedProduct ? selectedProduct.bank : ""}</p>
        <p>
          Hodnota vkladu:{" "}
          {selectedProduct ? selectedProduct.money.toLocaleString() : ""}
        </p>
        {selectedProduct?.type === "fund" ||
        selectedProduct?.type === "pensionSaving" ? (
          <p>
            Historická výkonnost:{" "}
            {selectedProduct
              ? Math.round(selectedProduct.interest * 1000) / 10
              : ""}{" "}
            %
          </p>
        ) : (
          <p>
            Úroková míra:{" "}
            {selectedProduct
              ? Math.round(selectedProduct.interest * 1000) / 10
              : ""}{" "}
            %
          </p>
        )}
        <button
          className="absolute bottom-3 right-3 rounded-md border border-solid border-black px-3 py-2"
          onClick={() => closeProduct()}
        >
          Uzavřít produkt
        </button>
      </div>
    </div>
  );
};

type PortfolioMenuProps = {
  setRouter: (router: string) => void;
  setPortfolioRouter: (router: string) => void;
  setSelectedProduct: (product: Product) => void;
};

const PortfolioMenu: FC<PortfolioMenuProps> = ({
  setRouter,
  setPortfolioRouter,
  setSelectedProduct,
}) => {
  const products = useContext(ProductsContext);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof (typeof products)[0];
    direction: "ascending" | "descending";
  } | null>(null);

  const sortedProducts = useMemo(() => {
    const sortableProducts = [...products];
    if (sortConfig !== null) {
      sortableProducts.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortConfig.direction === "ascending"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        } else if (typeof aValue === "number" && typeof bValue === "number") {
          return sortConfig.direction === "ascending"
            ? aValue - bValue
            : bValue - aValue;
        }
        return 0;
      });
    }
    return sortableProducts;
  }, [products, sortConfig]);

  const requestSort = (key: keyof (typeof products)[0]) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortArrow = (key: keyof (typeof products)[0]) => {
    if (!sortConfig || sortConfig.key !== key) return null;
    return sortConfig.direction === "ascending" ? "▲" : "▼";
  };
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
        <button>bankovní produkty</button>
        <button>nemovitosti a fyzický majetek</button>
      </div>
      <div className="mx-10 mt-24 w-full">
        <table className="min-w-full border-collapse border border-gray-200 bg-white text-sm">
          <thead>
            <tr>
              <th
                className="w-64 cursor-pointer border border-gray-200 px-4 py-2"
                onClick={() => requestSort("name")}
              >
                <div className="flex items-center justify-between">
                  <span>Název produktu</span>
                  <span>{getSortArrow("name")}</span>
                </div>
              </th>
              <th
                className="w-48 cursor-pointer border border-gray-200 px-4 py-2"
                onClick={() => requestSort("bank")}
              >
                <div className="flex items-center justify-between">
                  <span>Banka</span>
                  <span>{getSortArrow("bank")}</span>
                </div>
              </th>
              <th
                className="w-48 cursor-pointer border border-gray-200 px-4 py-2"
                onClick={() => requestSort("money")}
              >
                <div className="flex items-center justify-between">
                  <span>Aktuální hodnota</span>
                  <span>{getSortArrow("money")}</span>
                </div>
              </th>
              <th className="cursor-pointer border border-gray-200 px-4 py-2">
                <div className="flex items-center justify-center">
                  <span>Spravovat</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product, index) => (
              <tr
                key={product.id}
                className={index % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="border border-gray-200 px-4 py-2 text-left">
                  {product.name}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-left">
                  {product.bank}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-left">
                  {product.money.toLocaleString()} Kč
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <button
                    className="flex w-full justify-center text-center"
                    onClick={() => {
                      setPortfolioRouter("productExpand");
                      setSelectedProduct(product);
                    }}
                  >
                    <FaRegEdit className="text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
