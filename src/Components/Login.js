
import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#b1b6b4]">
      <div className="max-w-md w-full bg-[#8af1f5] rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
        <form clas>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" For="email">
              Email
            </label>
            <input
              className="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" For="password">
              Password
            </label>
            <input
              className="shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="shadow-[#636262] shadow-md   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  "
              type="button"
            >
              Sign In
            </button>
            <a className=" font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
