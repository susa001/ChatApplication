import React, { useState, useEffect } from "react";
import LoginImg from "../Assets/loginImg.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const navigate = useNavigate();


  const [userMail, SetuserMail] = useState();
  const [userPassword, SetuserPasssword] = useState();
  const [showPassword, SetshowPassword] = useState("password");

  const showeye = <FaEye />;
  const notshoweye = <FaEyeSlash />;

  const [Show, SetShow] = useState(<FaEye />);
  const [ShowValue,SetShowValue] = useState(true)

  

  const HandleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        MailorPhone: userMail,
        Password: userPassword,
      });
      console.log(response.status);

      //navigation to homepage
      navigate("/Loginsuccessful");
    } catch (e) {
      alert("invalid user");
    }
  };


  //show password 
  const HandleVisibility = () => {
    if(ShowValue) 
    {
      SetShowValue(false)
      SetshowPassword("text")
      SetShow(notshoweye)
    }
    else
    {
      SetShow(showeye)
      SetshowPassword("password")
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
            <div className="flex">
              <input
                type={showPassword}
                className="relative bg-gray-light focus:outline-none p-2 w-[98%] pr-[150px] rounded-l-md"
                onChange={(e) => {
                  SetuserPasssword(e.target.value);
                }}
              />{" "}
              <button
                className="bg-gray-light rounded-r-md pr-[2%]"
                onClick={HandleVisibility}
              >
                {Show}
              </button>
            </div>
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
            <a
              href=""
              className="text-[#375C8F] text-decoration-line: underline"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register here
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login  
