import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const dashBoardNavLink = [{ icon: "", item: "dashboard" }];
const DashBoard = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  return (
    <>
      {/* wrapper */}
      <div className="w-screen h-screen bg-[red] p-[4rem]">
        {" "}
        {/* container */}
        <div className="w-full h-full bg-white">
          {/* container left */}
          <div className="h-full w-[28rem] bg-[#000000] rounded-[2rem]">
            {/* container left surrounder */}
            <div className="flex flex-col pl-[5rem] py-[6rem] justify-between h-full ">
              <div>
                <h1 className="text-[#FFFFFF] text-[3.6rem] font-Montserrat font-bold">
                  Board.
                </h1>
                <div></div>
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
          <div></div>
          {/* container right end */}
        </div>
        {/* container end */}
      </div>
      {/* wrapper end */}
    </>
  );
};

export default DashBoard;
