import React, { useState } from "react";
import LoginImg from "../Assets/loginImg.jpg";
import axios from "axios";

const Login = () => {
  const [userMail, SetuserMail] = useState();
  const [userPassword, SetuserPasssword] = useState();

  const HandleLogin = async () => {
    try {
      await axios.post("http://localhost:8000/login", {
        MailorPhone: userMail,
        Password: userPassword,
      });
    } catch (e) {
      console.log("Error in sedning" + " " + e.message);
    }
  };

  return (
    <>
      <div className="flex space-x-5 items-center justify-center h-screen ">
        <div className="w-1/3 ">
          <img src={LoginImg} className="" />
        </div>
        <div className="space-y-4">
          <div className="text-3xl font-bold">Welcome Back!</div>
          <div className="">
            <label className="block text-xl pb-3">
              Email or MobileNo<span className="text-[#ff4040]">*</span>
            </label>
            <input
              type="email"
              className="bg-gray-light focus:outline-none p-2 w-full rounded-md"
              onChange={(e) => {
                SetuserMail(e.target.value);
              }}
            />
          </div>
          <div className="">
            <label className="inline-block text-xl pb-3">
              Password<span className="text-[#ff4040]">*</span>
            </label>
            <br />
            <input
              type="password"
              className="bg-gray-light focus:outline-none p-2 w-full pr-[150px] rounded-md"
              onChange={(e) => {
                SetuserPasssword(e.target.value);
              }}
            />
          </div>
          <div className="pt-2">
            <button
              className="bg-[#A1E7FF] pb-2 pt-2 pr-5 pl-5 text-xl font-bold rounded-md"
              onClick={HandleLogin}
            >
              Login
            </button>
          </div>
          <div className="text-xs">
            <span className="">Doesn't Have an Account?</span>
            <span> </span>
            <a
              href=""
              className="text-[#375C8F] text-decoration-line: underline"
            >
              {" "}
              Register here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
