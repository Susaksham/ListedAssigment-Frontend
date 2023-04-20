import React, { useContext, useEffect } from "react";
/* icons */
import googleIcon from "../assets/icons/googleIcon";
import googleImage from "../assets/icons8-google-48.png";
import appleImage from "../assets/icons8-apple-48.png";
import classes from "./SignIn.module.css";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const googleSignIn = async (e) => {
    e.preventDefault();
    try {
      await authContext.googleSignIn();
    } catch (err) {}
  };
  useEffect(() => {
    if (authContext.user) {
      navigate("/dashboard");
    }
  }, [authContext.user]);
  return (
    <>
      {/* sign in wrapper */}
      <div className={classes.signInContainer}>
        {/* container_left */}
        <div className="w-[40vw] laptop:flex mobile:hidden flex-4  h-screen bg-[#000000] text-slate-50 flex items-center justify-center">
          <h1 className="text-[7.2rem] w-[24.6rem] h-[8.8rem] font-Montserrat font-bold">
            Board.
          </h1>
        </div>
        {/* container_left end */}
        {/* container_right start */}
        <div className=" container_right bg-[#F5F5F5] flex items-center justify-center mobile:w-[100vw] laptop:w-[60vw] flex-6 h-screen">
          <div className=" mobile: laptop:w-[38.5rem] flex flex-col  ">
            <div className="w-full flex flex-col  ">
              <h1 className="font-Montserrat text-[3.6rem] font-bold ">
                Sign In
              </h1>
              <h3 className="font-Lato text-[1.6rem] ">
                Sign in to your account
              </h3>
              <div className="flex gap-[2.5rem]">
                <Button
                  text="Sign in with google"
                  image={googleImage}
                  onClick={googleSignIn}
                ></Button>
                <Button
                  onClick={() => {}}
                  text="Sign in with Apple"
                  image={appleImage}
                ></Button>
              </div>
            </div>
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
                <button className="font-bold font-Montserrat text-[1.6rem] w-full bg-[#000000] text-[#FFFFFF] py-[0.9rem] rounded-xl">
                  Sign In
                </button>
              </div>
            </form>
            <div className="mt-[2rem] flex items-end justify-center">
              <div className="flex gap-1">
                {" "}
                <span className="text-[1.6rem] text-[#858585]">
                  {" "}
                  Don't have an account?
                </span>
                <Link
                  className="text-[1.6rem] font-Lato text-[#346BD4]"
                  to="/register"
                >
                  Register here
                </Link>
              </div>
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
