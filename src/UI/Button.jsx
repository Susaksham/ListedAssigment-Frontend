import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className="w-[18rem] text-[1.2rem] p-[0.5rem]  text-[#858585] flex items-center
gap-[1rem] justify-center rounded-2xl bg-[#FFFFFF] mt-[2.6rem]"
        type="submit"
        onClick={props.onClick}
      >
        <img className="w-[1.4rem] inline-block" src={props.image} alt=""></img>{" "}
        <span className="text-[1.2rem] font-Montserrat">{props.text}</span>
      </button>
    </>
  );
};

export default Button;
