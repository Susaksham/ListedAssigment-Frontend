import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import SearchIcon from "../../assets/icons/SearchIcon";
import BellIcon from "../../assets/icons/BellIcon";
const Header = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  const logoutHandler = () => {
    const ans = confirm("Do you want to logout?");
    if (ans) {
      authContext.logOut();
    } else {
    }
  };
  return (
    <div className="flex justify-between">
      <h1 className="text-[#000000] font-Montserrat font-bold text-[2.4rem]">
        Dashboard
      </h1>{" "}
      <div className="flex gap-[3rem] items-center">
        {/* search_input */}
        <div className="flex w-[18rem] items-center h-[3rem] justify-center pl-[1.5rem] pr-[0.9rem] rounded-2xl bg-[#FFFFFF]">
          <input
            type="text"
            className="border-2 w-full h-full border-none text-[#B0B0B0] font-Lato text-[1.4rem] outline-none"
            placeholder="Search... "
          ></input>
          <SearchIcon></SearchIcon>
        </div>
        {/* search_input end  */}
        <BellIcon></BellIcon>
        <img
          onClick={logoutHandler}
          src={user.photoURL}
          className="w-[3rem] h-[3rem] rounded-full"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Header;
