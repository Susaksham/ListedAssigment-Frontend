import React, { useState, useEffect } from "react";
import { getTotalData, getstockData } from "../../helper/helper";
import Loader from "../../UI/Loader";
import GraphItem from "./GraphItem";
const GraphItems = () => {
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
      const { data, error, statusCode } = await getstockData(month, year);
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
      const { data, error, statusCode } = await getstockData(
        date.month,
        date.year
      );
      console.log(data, error, statusCode);
      if (data) {
        setTimeout(() => {
          setStockData((state) => {
            return { data, error, status: "success" };
          });
        }, 1000);
      } else {
        setStockData((state) => {
          return { data, error, status: "failed" };
        });
      }
    };
    fetchingStockData();
  }, []);
  return (
    <>
      <div className=" px-[4rem] py-[1rem] flex flex-col gap-[2rem] bg-[#FFFFFF] rounded-2xl">
        <div className="flex justify-between">
          <div className="flex flex-col items-start justify-center gap-[0.5rem]">
            <h1 className="font-Montserrat text-[1.8rem] font-bold">
              Activities
            </h1>
            <form className="text-[1.4rem] font-Montserrat w-fit">
              <select onChange={dateChangerHandler}>
                <option value="01-2023">May-June 2021</option>
                <option value="02-2023">June-July 2021</option>
                <option value="03-2023">July-august 2021</option>
                <option value="12-2022">august-september 2021</option>
              </select>
            </form>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-2 items-center justify-center">
              <span className="rounded-[100%] w-[1rem] h-[1rem] bg-[#E9A0A0]"></span>
              <span className="font-Lato text-[1.4rem]">Open</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="rounded-[100%] w-[1rem] h-[1rem] bg-[#9BDD7C]"></span>
              <span className="font-Lato text-[1.4rem]">High</span>
            </div>
          </div>
        </div>
        {stockData.status == "pending" && (
          <div className="w-full flex items-center justify-center">
            <Loader></Loader>
          </div>
        )}
        {stockData.status == "failed" && (
          <p>{JSON.stringify(stockData.error)}</p>
        )}
        {stockData.status == "success" && (
          <div className="  h-[25vh] ">
            <GraphItem data={stockData.data}></GraphItem>
          </div>
        )}
      </div>
    </>
  );
};

export default GraphItems;
