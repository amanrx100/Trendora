import React from "react";
import newsletterImg from "../../assets/newsletter.png"; // Update path as needed

const NewsSection = () => {
  return (
    <div className="bg-gray-200 rounded-2xl px-8 py-12 mt-12 mx-4 md:mx-16 lg:mx-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Text & Input */}
        <div className="flex-1 space-y-6 text-center lg:text-left pl-4 sm:pl-8 lg:pl-16">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Stay home & get your daily <br /> needs from our shop
          </h2>
          <form className="flex flex-col sm:flex-row items-center gap-2 justify-center lg:justify-start">
            <input
              type="email"
              placeholder="Enter your mail"
              className="w-full sm:w-80 px-8 py-3 rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
            >
              Subscribe now
            </button>
          </form>
          <p className="text-xs text-black font-semibold">
            I agree that my submitted data is being collected and stored.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={newsletterImg}
            alt="Newsletter Basket"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
