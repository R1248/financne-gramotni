import type { Product, Property } from "@prisma/client";
import { type FC, useContext, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { CharacterContext } from "~/contexts/charactersContext";
import { PropertyContext } from "~/contexts/propertyContext";
import { api } from "~/utils/api";

type ProductExpandProps = {
  setPortfolioRouter: (router: string) => void;
  selectedProduct: Product | undefined;
};

const ProductExpand: FC<ProductExpandProps> = ({
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
                          setPortfolioRouter("bankingProducts");
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
        onClick={() => setPortfolioRouter("bankingProducts")}
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

type PropertyExpandProps = {
  setPortfolioRouter: (router: string) => void;
  selectedPropertyId: string;
};

const PropertyExpand: FC<PropertyExpandProps> = ({
  setPortfolioRouter,
  selectedPropertyId,
}) => {
  const { mutate: moveInOut } = api.property.moveInOut.useMutation();
  const { mutate: changeResidence } =
    api.characters.changeResidence.useMutation();
  const { mutate: rentOrSell } = api.property.rentOrSellProperty.useMutation();
  const utils = api.useUtils();
  const properties = useContext(PropertyContext);
  const character = useContext(CharacterContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelling, setIsSelling] = useState(false); // Track if selling or renting
  const [price, setPrice] = useState<number>(0); // Track price input
  const selectedProperty = properties.find(
    (property) => property.id === selectedPropertyId,
  );

  const handleMoveInOut = () => {
    moveInOut(
      {
        propertyId: selectedProperty!.id,
        playerLivesHere: !selectedProperty?.playerLivesHere,
      },
      {
        onSuccess: () => {
          void utils.property.getAllProperties.invalidate();
        },
      },
    );
    changeResidence(
      {
        characterId: character.id,
        residence: selectedProperty!.city,
      },
      {
        onSuccess: () => {
          void utils.characters.getSelectedCharacter.invalidate();
        },
      },
    );
  };

  const openModal = (isForSale: boolean) => {
    setIsModalOpen(true);
    setIsSelling(isForSale);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPrice(0); // Reset price on close
  };

  const handleConfirm = () => {
    if (isSelling) {
      rentOrSell(
        {
          isForRent: false,
          isForSale: true,
          propertyId: selectedPropertyId,
          rentsFor: 0,
          sellsFor: price,
          playerLivesHere: false,
        },
        {
          onSuccess: () => {
            void utils.property.getAllProperties.invalidate();
          },
        },
      );
    } else {
      rentOrSell(
        {
          isForRent: true,
          isForSale: false,
          propertyId: selectedPropertyId,
          rentsFor: price,
          sellsFor: 0,
          playerLivesHere: false,
        },
        {
          onSuccess: () => {
            void utils.property.getAllProperties.invalidate();
          },
        },
      );
    }
    closeModal();
  };

  const disableMoveInOut =
    selectedProperty!.isForSale || selectedProperty!.isForRent;
  const disableSell =
    selectedProperty!.playerLivesHere || selectedProperty!.isForRent;
  const disableRent =
    selectedProperty!.playerLivesHere || selectedProperty!.isForSale;

  return (
    <div className="flex w-full items-center justify-center px-48 py-24">
      <button
        className="absolute right-7 top-7 rounded border border-solid border-black p-1"
        onClick={() => setPortfolioRouter("physicalProducts")}
      >
        <TiArrowBack className="text-4xl" />
      </button>
      <div className="relative flex h-full w-full flex-col rounded border border-solid border-black p-5">
        <h1 className="mb-2 text-xl">
          {selectedProperty ? selectedProperty.name : ""}
        </h1>
        <p>Obythná plocha: {selectedProperty?.area} m²</p>
        <p>Počet pokojů: {selectedProperty?.rooms}</p>
        <p>Patro: {selectedProperty?.floor}</p>
        <p>Energetická náročnost: {selectedProperty?.energyEfficiency}</p>
        <div className="mt-auto">
          <button
            className="mr-2 w-32 rounded-md border border-solid border-black px-3 py-2"
            onClick={() => handleMoveInOut()}
            disabled={disableMoveInOut}
          >
            {selectedProperty?.playerLivesHere ? "Přestěhovat" : "Nastěhovat"}
          </button>
          <button
            className="w-32 rounded-md border border-solid border-black px-3 py-2"
            onClick={() => openModal(false)} // Open modal for rent
            disabled={disableRent}
          >
            Pronajmout
          </button>
          <button
            className="ml-2 w-32 rounded-md border border-solid border-black px-3 py-2"
            onClick={() => openModal(true)} // Open modal for sell
            disabled={disableSell}
          >
            Prodat
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-lg font-bold">
              {isSelling ? "Prodat nemovitost" : "Pronajmout nemovitost"}
            </h2>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold">
                Cena (v Kč):
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
                onClick={closeModal}
              >
                Zrušit
              </button>
              <button
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                onClick={handleConfirm}
              >
                Potvrdit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { ProductExpand, PropertyExpand };
