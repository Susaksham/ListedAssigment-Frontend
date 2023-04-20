import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";
import { getstockDataMonthly } from "../../helper/helper";
import Loader from "../../UI/Loader";
const TopProductsInfo = () => {
  const [stockData, setStockData] = useState({
    status: "pending",
    data: "",
    error: "",
  });
  const [date, setDate] = useState({
    month: 1,
    year: 2023,
  });
  const dateChangerHandler = (e) => {
    const dataArray = e.target.value.split("-");
    const month = dataArray[0];
    const year = dataArray[1];
    const fetchingStockData = async () => {
      setStockData((state) => {
        return { ...state, status: "pending" };
      });
      const { data, error, statusCode } = await getstockDataMonthly(
        month,
        year
      );
      console.log(data, error, statusCode);
      if (data) {
        setTimeout(() => {
          setStockData((state) => {
            return { data, error, status: "success" };
          });
        }, 500);
      } else {
        setStockData((state) => {
          return { data, error, status: "failed" };
        });
      }
    };
    fetchingStockData();
  };
  useEffect(() => {
    const fetchingStockData = async () => {
      setStockData((state) => {
        return { ...state, status: "pending" };
      });
      const { data, error, statusCode } = await getstockDataMonthly(
        date.month,
        date.year,
        "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo"
      );
      console.log(data, error, statusCode);
      if (data) {
        setTimeout(() => {
          setStockData((state) => {
            return { data, error, status: "success" };
          });
        }, 0);
      } else {
        setStockData((state) => {
          return { data, error, status: "failed" };
        });
      }
    };
    fetchingStockData();
  }, []);
  console.log(stockData.data);
  const lineDataOpn = [];
  const lineDataHigh = [];
  const lineDatalow = [];
  let sum = 0;
  if (stockData.status == "success") {
    stockData.data.forEach((element) => {
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
    sum =
      Math.floor(lineDataHigh[0]) +
      Math.floor(lineDataOpn[0]) +
      Math.floor(lineDatalow[0]);
    console.log(lineDataOpn);
    console.log(lineDataHigh);
    console.log(lineDatalow);
  }

  return (
    <div className="flex flex-col flex-1 gap-2">
      <div className="flex items-center justify-between">
        <h1 className="font-Montserrat font-bold text-[1.8rem]">
          {" "}
          Top Products
        </h1>
        <form className="text-[1.4rem] font-Montserrat ">
          <select onChange={dateChangerHandler}>
            <option value="01-2023">May-June 2021</option>
            <option value="02-2023">June-July 2021</option>
            <option value="03-2023">July-august 2021</option>
            <option value="12-2022">august-september 2021</option>
          </select>
        </form>
      </div>
      {stockData.status == "pending" && (
        <div className="w-full flex items-center justify-center">
          <Loader></Loader>
        </div>
      )}
      {stockData.status == "failed" && <p>{JSON.stringify(stockData.error)}</p>}
      {stockData.status == "success" && (
        <div className="  h-[25vh] ">
          <div className="flex justify-start py-[1rem]">
            <div className=" flex items-start w-[50%] justify-start">
              <PieChart data={stockData.data}></PieChart>
            </div>
            <div className="flex flex-col h-[100%] items-center justify-center flex-1 gap-6">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex gap-2 items-center justify-center">
                  <span className="rounded-[100%] w-[1rem] h-[1rem] bg-[#98D89E]"></span>
                  <span className="font-Lato text-[1.4rem]">Open</span>
                </div>
                <div className="text-[1.4rem] font-Lato">
                  {((Math.floor(lineDataHigh[0]) / sum) * 100).toFixed(2)}%
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex gap-4 items-center justify-center">
                  <span className="rounded-[100%] w-[1rem] h-[1rem] bg-[#EE8484]"></span>
                  <span className="font-Lato text-[1.4rem]">High</span>
                </div>
                <div className="text-[1.4rem] font-Lato">
                  {((Math.floor(lineDataOpn[0]) / sum) * 100).toFixed(2)}%
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex gap-4 items-center justify-center">
                  <span className="rounded-[100%] w-[1rem] h-[1rem] bg-[#F6DC7D]"></span>
                  <span className="font-Lato text-[1.4rem]">low</span>
                </div>
                <div className="text-[1.4rem] font-Lato">
                  {" "}
                  {((Math.floor(lineDatalow[0]) / sum) * 100).toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopProductsInfo;
