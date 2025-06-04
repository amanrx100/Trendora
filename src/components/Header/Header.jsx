import React from 'react';

const Header = () => {
    return (
        <>

            <div className="w-full bg-cyan-700 text-white text-sm px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
                <div className="flex flex-wrap items-center gap-x-2">
                    <span className="font-semibold">Until the end of the sale:</span>
                    <span className="font-bold ml-2">893</span>Days
                    <span className="font-bold ml-2">17</span> Hours
                    <span className="font-bold ml-2">59 </span>minutes
                    <span className="font-bold ml-2">36</span>seconds
                    <span className="font-bold ml-2">Buy One Get One Free <span className="text-yellow-500 font-semibold ">First order</span></span>

                </div>
                <div className="flex flex-wrap items-center gap-4 mt-2 sm:mt-0 ">
                    <a href="#" className=" font-semibold hover:underline"> Track your Order</a>
                    <a href="#" className="hover:underline font-semibold"> Order Tracking</a>
                    <a href="#" className="hover:underline font-semibold"> About Us </a>
                </div>
            </div>

        </>
    )

}
export default Header;