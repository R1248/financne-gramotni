import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Portfolio = () => {
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
        data: [100000, 50000, 250000, 0, 1000000],
        backgroundColor: [
          "#facc15", // Volné peníze
          "#60a5fa", // Stavební spoření
          "#3b82f6", // Termínované vklady
          "#2563eb", // Penzijní pojištění
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
    <div style={{ width: "70%", margin: "auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Portfolio;
