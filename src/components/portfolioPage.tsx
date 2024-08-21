import { useContext, useMemo, useState, type FC } from "react";
import { TiArrowBack } from "react-icons/ti";
import { ProductsContext } from "~/contexts/dataContexts";
import { FaRegEdit } from "react-icons/fa";

type PortfolioPageProps = {
  setRouter: (router: string) => void;
};

const PortfolioPage: FC<PortfolioPageProps> = ({ setRouter }) => {
  const products = useContext(ProductsContext);

  const [sortConfig, setSortConfig] = useState<{
    key: keyof (typeof products)[0];
    direction: "ascending" | "descending";
  } | null>(null);

  const sortedProducts = useMemo(() => {
    let sortableProducts = [...products];
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
    <div className="relative flex h-auto flex-grow overflow-hidden rounded-2xl bg-white">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setRouter("home")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      <div className="absolute left-7 top-7">
        <h1 className="text-3xl">Přehled investic</h1>
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
                  <button className="flex w-full justify-center text-center">
                    <FaRegEdit className="text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioPage;
