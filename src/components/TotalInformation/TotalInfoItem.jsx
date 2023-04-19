import React from "react";

const TotalInfoItem = ({ title, value, icon, color }) => {
  console.log(color);
  return (
    <div
      style={{ backgroundColor: `#${color}` }}
      className={`rounded-3xl text-[#000]  px-[2.5rem] py-[1.4rem] flex flex-col gap-[0.2rem] flex-1 `}
    >
      <div className="self-end mb-[0.8rem] text-[2rem]">Icon</div>
      <h1 className="font-Lato text-[1.2rem]">{title}</h1>
      <h3 className="font-Open font-bold text-[1.6rem]">{Number(value)}</h3>
    </div>
  );
};

export default TotalInfoItem;
