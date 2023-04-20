import React from "react";

const TotalInfoItem = ({ title, value, icon, color }) => {
  console.log(color);
  return (
    <div
      style={{ backgroundColor: `#${color}` }}
      className={`rounded-3xl text-[#000]  px-[2.5rem] py-[1.4rem] flex flex-col gap-[0.2rem] laptop:flex-1  mobile:basis-[48%]  `}
    >
      <div className="self-end mb-[0.8rem] laptop:text-[2rem] mobile:text-[3rem]">
        Icon
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
