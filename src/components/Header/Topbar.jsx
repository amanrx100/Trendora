import React from "react";
import trackIcon from "../../assets/track-icon.png";

const Topbar = () => {
  return (
    <div className="bg-[var(--color-primary)]">
      <div className="w-full text-white container mx-auto text-xs sm:text-sm px-2 py-1 flex justify-between items-center font-sans whitespace-nowrap overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Until the end of the sale:</span>
          <span className="font-bold">893</span> Days
          <span className="font-bold">17</span> Hours
          <span className="font-bold">59</span> minutes
          <span className="font-bold">36</span> seconds
          <span className="ml-4 font-semibold">
            Buy One Get One Free on{" "}
            <span className="text-yellow-500 font-semibold">First Order</span>
          </span>
        </div>

        <div className="flex items-center gap-3 pl-4 border-l border-white ml-3">
          <a
            href="#"
            className="flex items-center gap-1 font-semibold hover:underline"
          >
            <img src={trackIcon} alt="Truck Icon" className="w-3 h-3" />
            Track Your Order
          </a>
          <a href="#" className="hover:underline font-semibold">
            Order Tracking
          </a>
          <a href="#" className="hover:underline font-semibold">
            About Us
          </a>
          <select className="bg-[var(--color-primary)] text-white font-semibold outline-none">
            <option>Eng</option>
            <option>Esp</option>
          </select>
          <select className="bg-[var(--color-primary)] text-white font-semibold outline-none">
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
