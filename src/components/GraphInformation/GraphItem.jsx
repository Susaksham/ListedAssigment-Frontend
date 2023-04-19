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
export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
  },
};
const GraphItem = (props) => {
  if (!props.data) {
    return <p>Loading...</p>;
  }
  console.log(props.data);
  const lineDataLow = [];
  const lineDataHigh = [];

  props.data.forEach((element) => {
    lineDataLow.push(
      (Number(element.data[`1. open`]) -
        Math.floor(Number(element.data[`1. open`]))) *
        5000
    );
    lineDataHigh.push(
      (Number(element.data[`2. high`]) -
        Math.floor(Number(element.data[`2. high`]))) *
        5000
    );
  });
  console.log(lineDataHigh);
  console.log(lineDataLow);
  const data = {
    labels: ["week 1", "week 2", "week 3", "week4"],
    datasets: [
      {
        label: "open",
        data: lineDataHigh,
        borderColor: "#E9A0A0",
        backgroundColor: "#E9A0A0",
        lineTension: 0.8,
      },
      {
        label: "high",
        data: lineDataLow,
        borderColor: "#9BDD7C",
        backgroundColor: "#9BDD7C",
        lineTension: 0.8,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default GraphItem;
