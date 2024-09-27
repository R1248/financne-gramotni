import { useState, type FC } from "react";
import { type Product } from "@prisma/client";
import { BankingProducts } from "./bankingProducts";
import PhysicalProducts from "./physicalProducts";
import { ProductExpand, PropertyExpand } from "./productExpand";

type PortfolioPageProps = {
  setRouter: (router: string) => void;
};

const PortfolioPage: FC<PortfolioPageProps> = ({ setRouter }) => {
  const [portfolioRouter, setPortfolioRouter] = useState("bankingProducts");
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [selectedPropertyId, setSelectedPropertyId] = useState("");

  return (
    <div className="relative flex h-auto flex-grow overflow-hidden rounded-2xl bg-white">
      {
        {
          bankingProducts: (
            <BankingProducts
              setRouter={setRouter}
              setPortfolioRouter={setPortfolioRouter}
              setSelectedProduct={setSelectedProduct}
            />
          ),
          physicalProducts: (
            <PhysicalProducts
              setPortfolioRouter={setPortfolioRouter}
              setRouter={setRouter}
              setSelectedPropertyId={setSelectedPropertyId}
            />
          ),
          productExpand: (
            <ProductExpand
              setPortfolioRouter={setPortfolioRouter}
              selectedProduct={selectedProduct}
            />
          ),
          propertyExpand: (
            <PropertyExpand
              setPortfolioRouter={setPortfolioRouter}
              selectedPropertyId={selectedPropertyId}
            />
          ),
        }[portfolioRouter]
      }
    </div>
  );
};

export default PortfolioPage;
