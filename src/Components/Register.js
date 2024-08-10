import React from "react";
import RegisterImg from "../Assets/registerpage.jpg"


const Register = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
       <div className="w-1/2 flex flex-col items-center"> 
          <img src={RegisterImg} />
          <div className="text-center ">
            <p className="text-2xl font-bold">Flex Your Connections</p>
            <p className="w-3/4 text-sm mt-2 mx-auto text-gray-dark">
              Elevate your chats, build real bonds, and stay linked with your squad.
            </p>
          </div>
        </div>
        <div className="space-y-3 -ml-10">
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
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy-policy "
              className="mr-2"
            />
            <label htmlFor="privacy-policy" className="text-sm">
              I accept the <a href="/privacy-policy" className="text-blue-600 underline font-semibold">privacy policy</a>
            </label>
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
