import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { UserDataContext } from "~/contexts/dataContexts";
import { api } from "~/utils/api";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Portfolio = () => {
  const userData = useContext(UserDataContext);
  const {
    data: products,
    isLoading,
    isError,
  } = api.products.getAllProducts.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  let freeMoney = 0;
  let buildingSavings = 0;
  let termDeposits = 0;
  let pensionSaving = 0;
  let funds = 0;

  products?.forEach((product) => {
    switch (product.type) {
      case "currentAccount" || "savingAccount":
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

  const data = {
    labels: [
      "Volné peníze",
      "Stavební spoření",
      "Termínované vklady",
      "Penzijní pojištění",
      "Fondy",
    ],
    datasets: [
      {
        label: " Hodnota",
        data: [
          userData.money + freeMoney,
          buildingSavings,
          termDeposits,
          pensionSaving,
          funds,
        ],
        backgroundColor: [
          "#facc15", // Volné peníze
          "#60a5fa", // Stavební spoření
          "#3b82f6", // Termínované vklady
          "#2563eb", // Penzijní spoření
          "#1d4ed8", // Fondy
        ],
        borderColor: "#ffffff",
        borderWidth: 4,
        hoverOffset: 10,
      },
    ],
  };

  // Define the options with the correct type
  const options: ChartOptions<"doughnut"> = {
    cutout: "70%", // This makes it a donut chart with a blank center
    plugins: {
      legend: {
        display: false,
        position: "bottom", // Correct type ensures this works
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Portfolio;
