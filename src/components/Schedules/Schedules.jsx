import React from "react";
import Meetings from "../Meetings/Meetings";
// import SeeAllIcon from "../../assets/SeeAllPng.png";
import SeeAllIcon from "../../assets/icons/SeeAllIcon";
const meetingData = [
  {
    description: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    address: "at Sunset Road, Kuta, Bali",
  },
  {
    description: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    address: "at Central Jakarta ",
  },
];
const Schedules = () => {
  const seeAllMeetingsHandler = () => {
    alert("Cant show meetings");
  };
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="flex justify-between items-center">
        <h1 className="font-Montserrat font-bold text-[1.8rem] ">
          Today's schedule
        </h1>
        <button
          className="flex items-center justify-center gap-2 "
          onClick={seeAllMeetingsHandler}
        >
          <span className="font-Montserrat text-[1.2rem]">See All</span>
          <span>
            <SeeAllIcon></SeeAllIcon>
          </span>
        </button>
      </div>
      <div className="flex flex-col items-start gap-[1.3rem]">
        {meetingData.map((meeting) => {
          return <Meetings meeting={meeting}></Meetings>;
        })}
      </div>
    </div>
  );
};

export default Schedules;
