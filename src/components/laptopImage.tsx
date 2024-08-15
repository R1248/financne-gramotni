import { type FC } from "react";
import laptop from "../../public/laptop.png";
import Image from "next/image";
import marxMises from "../../public/marx_mises.png";
import stockMarket from "../../public/stock_market.png";
import products from "../../public/products.png";

type LaptopImageProps = {
  buttonImage: string;
};

const LaptopImage: FC<LaptopImageProps> = ({ buttonImage }) => {
  let image;
  let text;

  switch (buttonImage) {
    case "marxMises":
      image = marxMises;
      text = "Teorie";
      break;
    case "stockMarket":
      image = stockMarket;
      text = "Finanční trhy";
      break;
    case "products":
      image = products;
      text = "Navštívit banky";
      break;
    default: {
      throw new Error("Not implemented yet");
    }
  }
  return (
    <div className="relative flex flex-col items-center">
      <Image alt="laptop" src={laptop} className="w-64" />
      <Image
        alt={buttonImage}
        src={image}
        className="absolute left-[44px] top-[27px] w-[167px] transition-transform hover:cursor-pointer hover:opacity-90"
      />
      <p className="absolute top-[155px] text-xl">{text}</p>
    </div>
  );
};

export default LaptopImage;
