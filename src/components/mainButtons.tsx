import { type FC } from "react";
import Image from "next/image";
import theoryImage from "../../public/theory-image.png";
import productsImage from "../../public/products-image.png";

const TheoryButton: FC = () => {
  return (
    <div className="mr-2 h-full w-full bg-white">
      <div className="relative h-auto w-full">
        <Image
          src={theoryImage}
          alt="theoryImage"
          width={470}
          height={267}
          layout="responsive"
        />
        <p className="ml-2 mt-2 text-4xl">Teorie</p>
        <p className="ml-2 mt-1 text-xl">Vydělej peníze studiem teorie</p>
      </div>
    </div>
  );
};

const ProductsButton: FC = () => {
  return (
    <div className="ml-2 h-full w-full bg-white">
      <div className="relative h-auto w-full">
        <Image
          src={productsImage}
          alt="productsImage"
          width={470}
          height={267}
          layout="responsive"
        />
        <p className="ml-2 mt-2 text-4xl">Produkty</p>
        <p className="ml-2 mt-1 text-xl">Zúroč peníze pomocí produktů</p>
      </div>
    </div>
  );
};

export { TheoryButton, ProductsButton };
