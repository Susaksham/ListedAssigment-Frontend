import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      display: false,
      labels: {
        usePointStyle: true,
      },
    },
  },
};

const PieChart = (props) => {
  if (!props.data) {
    return <p>Loading...</p>;
  }
  console.log(props.data);
  const lineDataOpn = [];
  const lineDataHigh = [];
  const lineDatalow = [];

  props.data.forEach((element) => {
    lineDataOpn.push(
      (Number(element.data[`1. open`]) -
        Math.floor(Number(element.data[`1. open`]))) *
        5000
    );
    lineDataHigh.push(
      (Number(element.data[`2. high`]) -
        Math.floor(Number(element.data[`2. high`]))) *
        5000
    );
    lineDatalow.push(
      (Number(element.data[`3. low`]) -
        Math.floor(Number(element.data[`3. low`]))) *
        5000
    );
  });
  console.log(lineDataOpn);
  console.log(lineDataHigh);
  console.log(lineDatalow);
  const data = {
    labels: ["Open", "High", "Low"],
    datasets: [
      {
        label: "# of Votes",
        data: [lineDataOpn[0], lineDataHigh[0], lineDatalow[0]],
        backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
        borderColor: ["#98D89E", "#EE8484", "#F6DC7D"],
      },
    ],
  };
  const dateChangerHandler = () => {};
  return <Pie options={options} data={data} />;
};
export default PieChart;
