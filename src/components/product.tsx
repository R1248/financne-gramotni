import { type FC } from "react";
import productImage from "../../public/product.png";
import Image from "next/image";
import { TiArrowBack } from "react-icons/ti";

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
  name: string;
  setBankPageRouter: (router: string) => void;
};

export const ProductPage: FC<ProductPageProps> = ({
  name,
  setBankPageRouter,
}) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setBankPageRouter("products")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      <div className="relative mt-16 h-[70%] w-3/4 rounded-lg border border-solid border-black">
        <h1 className="text-2xl">{name}</h1>
        <p className="mx-10 mt-4 w-64">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          malesuada, libero nec tincidunt ultricies, nunc mi dignissim ligula,
          eget ultricies risus nisl nec sapien. Nullam nec nisl nec libero
          ultricies malesuada. Sed sit amet nunc nec libero ultricies malesuada.
          Nullam nec nisl nec libero ultricies malesuada.
        </p>
        <button className="absolute bottom-5 right-5 rounded border border-solid border-black px-4 py-1">
          Sjednat
        </button>
      </div>
    </div>
  );
};
