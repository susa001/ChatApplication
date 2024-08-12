import React from "react";
import RegisterImg from "../Assets/Registerpage.png";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [Name, SetName] = useState();
  const [MobileNo, SetMobileNo] = useState();
  const [Email, SetEmail] = useState();
  const [Password, SetPassword] = useState();

  const HandleRegister = async () => {
    try {
      const response = await axios
        .post("http://localhost:8000", {
          userName: Name,
          userMobileNo: MobileNo,
          userEmail: Email,
          userPassword: Password,
        })
        .then(()=>console.log(response));
    } catch (e) {
      
    }
  };

  return (
    <>
      <div className="flex space-x-10 items-center justify-center h-screen">
        <div className="w-1/3 flex flex-col items-center ">
          <img src={RegisterImg} className="" />
        </div>
        <div className="space-y-3">
          <div className="text-3xl font-bold text-center">
            Create an Account
          </div>
          <div className="">
            <label className="block text-xl pb-2">
              Name<span className="text-[#ff4040]">*</span>
            </label>

            <input
              type="text"
              className="bg-gray-light focus:outline-none p-2 w-full rounded-md"
              onChange={(e) => SetName(e.target.value)}
            />
          </div>
          <div className="">
            <label className="inline-block text-xl pb-2">
              Mobile Number<span className="text-[#ff4040]">*</span>
            </label>
            <br />
            <input
              type="number"
              className="bg-gray-light focus:outline-none p-2 w-full pr-[150px] rounded-md"
              onChange={(e) => SetMobileNo(e.target.value)}
            />
          </div>
          <div className="">
            <label className="inline-block text-xl pb-2">
              Email<span className="text-[#ff4040]">*</span>
            </label>
            <br />
            <input
              type="email"
              className="bg-gray-light focus:outline-none p-2 w-full pr-[150px] rounded-md"
              onChange={(e) => SetEmail(e.target.value)}
            />
          </div>
          <div className="">
            <label className="inline-block text-xl pb-2">
              Password<span className="text-[#ff4040] ">*</span>
            </label>
            <br />
            <input
              type="password"
              className="bg-gray-light focus:outline-none p-2 w-full pr-[150px] rounded-md"
              onChange={(e) => SetPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="privacy-policy " className="mr-2" />
            <label htmlFor="privacy-policy" className="text-sm">
              I accept the{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 underline font-semibold"
              >
                privacy policy
              </a>
            </label>
          </div>
          <div className="pt-5 flex justify-center">
            <button
              className="bg-[#A1E7FF] pb-2 pt-2 pr-5 pl-5 text-xl font-bold rounded-lg"
              onClick={HandleRegister}
            >
              <span className="">Create Account</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
