import React from "react";
import { ReactDOM } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
export default function Barchart({ chartData }) {
  return <Bar data={chartData} />;
}
