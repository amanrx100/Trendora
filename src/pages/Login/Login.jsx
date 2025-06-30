import React from 'react';
import { Link } from 'react-router-dom';
import AuthNavbar from '../Login/AuthNavbar';
import Features from '../Login/Features';

const Login = () => {
  return (
    <>
    <AuthNavbar/>
    <div className="w-full min-h-screen  flex items-center justify-start px-4 border-gray-300  bg-white mx-auto">
      <div className="w-screen max-w-md border border-gray-300  hover:border-cyan-700 rounded-lg p-6 h-[360px] mx-auto ">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Username or email address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-600"
            >
              Log in
            </button>
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
          </div>
          <div>
            <a href="#" className="text-sm text-red-500 hover:underline">
              Forgot your password?
            </a>

            <div className="mt-4 text-sm">
              <span>Don't have an account? </span>
              <Link to="/register" className="text-cyan-700 hover:underline inline">
                Register Here
              </Link>
            </div>

          </div>
        </form>
      </div>
    </div>
    <Features/>
    </>
  );
};

export default Login;
