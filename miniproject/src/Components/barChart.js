import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

let Daily = localStorage.getItem("dailyCalreq");
let main = Array(31).fill(Daily);

let days = Array.from({ length: 31 }, (_, index) => index + 1);
let dayCal = Array(32);
export default function BarChart({ props }) {
  for (let i = 0; i < 31; i++) {
    dayCal[i - 1] = props[i];
  }

  console.log(dayCal);
  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "white",
          font: {
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          color: "white",
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",

        labels: {
          color: "white",
          font: {
            size: 20,
          },
        },
      },
    },
  };

  const labels = [...days];

  const data = {
    labels,
    datasets: [
      {
        label: "Daily Calorie Goal",
        data: main,

        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Daily Calorie Intake",
        data: [...dayCal],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="piechart">
      <Line options={options} data={data} />
    </div>
  );
}
