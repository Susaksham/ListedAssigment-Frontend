import React from "react";
import PieChart from "./PieChart";
const TopProductsInfo = () => {
  const dateChangerHandler = () => {};
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
      <div className=" flex items-start flex-1">
        <PieChart></PieChart>
      </div>
    </div>
  );
};

export default TopProductsInfo;
