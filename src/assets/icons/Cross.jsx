import React from "react";

const Cross = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="mobile:w-[5rem] h-[5rem] laptop:w-[3rem] laptop:h-[3rem]"
      fill="white"
      onClick={onClick}
    >
      <title>close</title>
      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  );
};

export default Cross;
