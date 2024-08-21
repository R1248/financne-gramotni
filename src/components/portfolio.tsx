import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { type FC } from "react";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

type PortfolioProps = {
  freeMoney: number;
  buildingSavings: number;
  termDeposits: number;
  pensionSaving: number;
  funds: number;
};

const Portfolio: FC<PortfolioProps> = ({
  freeMoney,
  buildingSavings,
  termDeposits,
  pensionSaving,
  funds,
}) => {
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
        data: [freeMoney, buildingSavings, termDeposits, pensionSaving, funds],
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
