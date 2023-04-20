import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, NavLink } from "react-router-dom";
// import schedules from "../assets/icons/schedule_icon.svg";
import ScheduleIcon from "../assets/icons/ScheduleIcon";
import SettingIcon from "../assets/icons/SettingIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import TransitionIcon from "../assets/icons/TransitionIcon";
import UserIcon from "../assets/icons/UserIcon";

import classes from "./DashBoard.module.css";

import TotalInfoItems from "./TotalInformation/TotalInfoItems";
import GraphItems from "./GraphInformation/GraphItems";
import TopProductsInfo from "./TopProductsInformation/TopProductsInfo";
import Schedules from "./Schedules/Schedules";
import Header from "./Header/Header";
import Cross from "../assets/icons/Cross";
const dashBoardNavLink = [
  {
    id: Math.random().toString() + Math.random().toString(),
    icon: <DashboardIcon></DashboardIcon>,
    item: "Dashboard",
  },
  {
    id: Math.random().toString() + Math.random().toString(),
    icon: <TransitionIcon></TransitionIcon>,
    item: "Transactions",
  },
  {
    id: Math.random().toString() + Math.random().toString(),
    icon: <ScheduleIcon></ScheduleIcon>,
    item: "Schedules",
  },
  {
    id: Math.random().toString() + Math.random().toString(),
    icon: <UserIcon></UserIcon>,
    item: "Users",
  },
  {
    id: Math.random().toString() + Math.random().toString(),
    icon: <SettingIcon></SettingIcon>,
    item: "Settings",
  },
];
const DashBoard = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  const [showDashBoard, setShowDashBoard] = useState(false);
  const logoutHandler = () => {
    const ans = confirm("Do you want to logout?");
    if (ans) {
      authContext.logOut();
    } else {
    }
  };
  // if (!user) {
  //   navigate("/");
  // }

  const dahsBoardToggler = () => {
    setShowDashBoard((state) => {
      return !state;
    });
  };

  return (
    <>
      {/* wrapper */}
      <div
        className={`w-screen laptop:h-screen mobile:min-h-screen bg-[#F5F5F5] ${
          showDashBoard ? "p-[0rem]" : "p-[2rem]"
        } `}
      >
        {" "}
        {/* container */}
        <div className="w-full h-full  gap-[4rem]  flex relative">
          {/* container left */}
          <div
            className={`${classes.left_container} ${
              showDashBoard ? classes.visible : classes.notShow
            }`}
          >
            {/* container left surrounder */}
            <div className="flex flex-col pl-[5rem] py-[6rem] justify-between h-full ">
              <div className="flex flex-col gap-[4rem]">
                <div className="flex justify-between items-center pr-[3rem]">
                  <h1 className="text-[#FFFFFF] text-[3.6rem] font-Montserrat font-bold">
                    Board.
                  </h1>
                  {showDashBoard && <Cross onClick={dahsBoardToggler}></Cross>}
                </div>
                <div className="flex flex-col text-slate-50 gap-[3rem]">
                  {dashBoardNavLink.map((item) => {
                    return (
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? " text-[1.8rem] font-Montserrat font-bold text-slate-50"
                            : " text-[1.8rem] font-Montserrat"
                        }
                        key={item.id}
                        to={`/${item.item}`}
                      >
                        <span className="flex items-center gap-[2rem] ">
                          <span>{item.icon}</span>
                          <span className="bg-[FFFFFF] font-Montserrat text-[1.8rem]">
                            {item.item}
                          </span>
                        </span>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-[2rem]">
                <h3 className="font-Montserrat text-[#FFFFFF] text-[1.4rem]">
                  Help
                </h3>{" "}
                <h3 className="font-Montserrat text-[#FFFFFF] text-[1.4rem]">
                  Contact Us
                </h3>
              </div>
            </div>
            {/* container left surrounder end */}
          </div>
          {/* container left end */}
          {/* container right */}
          <div className={classes.right_container}>
            <div className={classes.rightContainer_childContainer}>
              <Header dahsBoardToggler={dahsBoardToggler}></Header>
              {/* TotalInformation_container */}
              <div className="w-full h-fit">
                <TotalInfoItems></TotalInfoItems>
              </div>
              {/* TotalInformation_container_end */}
              {/* GraphInformation_container */}
              <div>
                <GraphItems></GraphItems>
              </div>
              {/* GraphInformation_container end */}
              <div className="flex  mobile:flex-col laptop:flex-row  w-full laptop:gap-[4rem] mobile:gap-[3rem]">
                <div className="flex-1 bg-[#ffffff] px-[4rem] py-[1.5rem] rounded-2xl">
                  <TopProductsInfo></TopProductsInfo>
                </div>
                <div className="flex-1 bg-[#ffffff]  px-[4rem] py-[1.5rem] rounded-2xl">
                  <Schedules></Schedules>
                </div>
              </div>
            </div>
          </div>
          {/* container right end */}
        </div>
        {/* container end */}
      </div>
      {/* wrapper end */}
    </>
  );
};

export default DashBoard;
