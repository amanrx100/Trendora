import React from 'react';
import AuthNavbar from '../Login/AuthNavbar';
import Features from '../Login/Features';

const RegisterForm = () => {
  return (
    <>
    <AuthNavbar />
    <div className="min-h-screen flex items-center justify-center px-4   bg-white">
      <div className="w-full max-w-md border   border-gray-300  hover:border-cyan-700   rounded-lg   p-6">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Write a username"
              className="w-full border   border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full border   border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full border  border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <p className="text-xs text-gray-600">
            Your personal data will be used to process your order, support your experience
            throughout this website, and for other purposes described in our{' '}
            <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
          </p>
          <button
            type="submit"
            className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    <Features />
    </>
  );
};

export default RegisterForm;
