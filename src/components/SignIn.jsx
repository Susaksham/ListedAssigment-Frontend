import React from "react";
/* icons */
import googleIcon from "../assets/icons/googleIcon";
import googleImage from "../assets/icons8-google-48.png";
import appleImage from "../assets/icons8-apple-48.png";
import classes from "./SignIn.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      {/* sign in wrapper */}
      <div className={classes.signInContainer}>
        {/* container_left */}
        <div className="w-[40vw] flex-4  h-screen bg-[#000000] text-slate-50 flex items-center justify-center">
          <h1 className="text-[7.2rem] w-[24.6rem] h-[8.8rem] font-Montserrat">
            Board.
          </h1>
        </div>
        {/* container_left end */}
        {/* container_right start */}
        <div className=" container_right bg-[#F5F5F5] flex items-center justify-center w-[60vw] flex-6 h-screen">
          <div className="w-[38.5rem] flex flex-col  ">
            <form className="w-full flex flex-col  ">
              <h1 className="font-Montserrat text-[3.6rem]  ">Sign In</h1>
              <h3 className="font-Lato text-[1.6rem] ">
                Sign in to your account
              </h3>
              <div className="flex gap-[2.5rem]">
                <button
                  className="w-[18rem] text-[1.2rem] p-[0.5rem]  text-[#858585] flex items-center
  gap-[1rem] justify-center rounded-2xl bg-[#FFFFFF] mt-[2.6rem]"
                >
                  <img
                    className="w-[1.4rem] inline-block"
                    src={googleImage}
                    alt=""
                  ></img>{" "}
                  <span className="text-[1.2rem]">Sign in with google</span>
                </button>
                <button
                  className="w-[18rem] text-[1.2rem] p-[0.5rem]  text-[#858585] flex items-center
    gap-[1rem] justify-center rounded-2xl bg-[#FFFFFF] mt-[2.6rem]"
                >
                  <img
                    className="w-[1.4rem] inline-block"
                    src={appleImage}
                    alt=""
                  ></img>{" "}
                  <span className="text-[1.2rem]">Sign in with Apple</span>
                </button>
              </div>
            </form>
            {/* input box*/}
            <form className="w-full flex flex-col h-[35.6rem] rounded-3xl bg-[#FFFFFF] mt-[2.5rem] gap-[2rem] p-[3rem] ">
              <div className="w-full flex flex-col   ">
                <label className="font-Lato text-[1.6rem]">Email address</label>
                <input
                  type="text"
                  placeholder="johndoe@gmail.com"
                  className={classes.email}
                ></input>
              </div>
              <div className="w-full flex flex-col  ">
                <label className="font-Lato text-[1.6rem]">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  className={classes.email}
                ></input>
              </div>
              <div>
                <Link className="text-[1.6rem] font-Lato text-[#346BD4]" to="/">
                  Forgot Password?
                </Link>
              </div>
              <div className="w-full ">
                <button className="font-Montserrat text-[1.6rem] w-full bg-[#000000] text-[#FFFFFF] py-[0.9rem] rounded-xl">
                  Sign In
                </button>
              </div>
            </form>
            <div className="mt-[2rem] flex items-end justify-center">
              <span className="text-[1.6rem]">
                {" "}
                Don't have an account?
                <Link
                  className="text-[1.6rem] font-Lato text-[#346BD4]"
                  to="/register"
                >
                  Register here
                </Link>
              </span>
            </div>
          </div>

          <form></form>
        </div>
        {/* container_right end */}
      </div>
    </>
  );
};

export default SignIn;
