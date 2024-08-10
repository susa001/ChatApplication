import React from "react";

import RegisterImg from "../Assets/registerpage.jpg"


const Register = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-50 -mr-12"> 
          <img src={RegisterImg} className=""/>
        </div>
        <div className="space-y-3 -ml-8">
          <div className="text-3xl font-bold text-center" >Create an Account</div>
          <div className="">
            <label className="block text-xl pb-2">
              FirstName<span className="text-[#ff4040]">*</span>
            </label>

            <input
              type="email"
              className="bg-gray-light focus:outline-none p-2 w-full rounded-md"
            />
          </div>
          <div className="">
            <label className="inline-block text-xl pb-2">
              LastName<span className="text-[#ff4040]">*</span>
            </label>
            <br />
            <input
              type="password"
              className="bg-gray-light focus:outline-none p-2 w-full pr-[150px] rounded-md" 
            />
          </div>
          <div className="">
            <label className="inline-block text-xl pb-2">
              Email<span className="text-[#ff4040]">*</span>
            </label>
            <br />
            <input
              type="password"
              className="bg-gray-light focus:outline-none p-2 w-full pr-[150px] rounded-md" 
            />
          </div>
          <div className="">
            <label className="inline-block text-xl pb-2">
              Password<span className="text-[#ff4040]">*</span>
            </label>
            <br />
            <input
              type="password"
              className="bg-gray-light focus:outline-none p-2 w-full pr-[150px] rounded-md" 
            />
          </div>
          <div className="pt-5 flex justify-center" >
            <button className="bg-[#A1E7FF] pb-2 pt-2 pr-5 pl-5 text-xl font-bold rounded-lg">
              <span className="">Create Account</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
