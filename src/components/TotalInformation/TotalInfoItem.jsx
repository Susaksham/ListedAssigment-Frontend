import React from "react";
import TotalRevenueIcon from "../../assets/icons/TotalRevenueIcon";
import TotalUsers from "../../assets/icons/TotalUsers";
import Likes from "../../assets/icons/Likes";
import TransactionIcon2 from "../../assets/icons/TransactionIcon2";
const icons = [
  <TotalRevenueIcon></TotalRevenueIcon>,
  <TransactionIcon2></TransactionIcon2>,
  <Likes></Likes>,
  <TotalUsers></TotalUsers>,
  ,
];
const TotalInfoItem = ({ title, value, icon, color, index }) => {
  console.log(color);
  return (
    <div
      style={{ backgroundColor: `#${color}` }}
      className={`rounded-3xl text-[#000]  px-[2.5rem] py-[1.4rem] flex flex-col gap-[0.2rem] laptop:flex-1  mobile:basis-[48%]  `}
    >
      <div className="self-end mb-[0.8rem] laptop:text-[2rem] mobile:text-[3rem]">
        {icons[index]}
      </div>
      <h1 className="font-Lato laptop:text-[1.2rem] mobile:text-[2.4rem] ">
        {title}
      </h1>
      <h3 className="font-Open font-bold laptop:text-[2rem] mobile:text-[2.4rem]">
        {Number(value)}
      </h3>
    </div>
  );
};

export default TotalInfoItem;
