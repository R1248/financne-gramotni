import { useEffect, useState, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkOpportunityBanner from "./banners/workOpportunityBanner";
import SciteMeetingBanner from "./banners/sciteMeetingBanner";
import { ProductsButton, TheoryButton } from "./mainButtons";

const CentralPanel: FC = () => {
  const [isOddMinute, setIsOddMinute] = useState(
    new Date().getMinutes() % 2 !== 0,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentMinute = new Date().getMinutes();
      setIsOddMinute(currentMinute % 2 !== 0);
    }, 1000); // Check every second to update promptly at minute change

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  return (
    <div className="my-3 ml-10 mr-5 flex w-full min-w-[550px] flex-col items-stretch">
      <AnimatePresence>
        <div>
          {isOddMinute ? (
            <motion.div
              key="scite"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SciteMeetingBanner />
            </motion.div>
          ) : (
            <motion.div
              key="work"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WorkOpportunityBanner />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
      <div className="relative mt-3 flex h-auto w-full flex-grow flex-row items-stretch">
        <TheoryButton />
        <ProductsButton />
      </div>
    </div>
  );
};

export default CentralPanel;
