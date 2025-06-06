import React from 'react';
import trackIcon from '../Header/track-icon.png';


const Header = () => {
    return (
        <>

            <div className="w-full bg-cyan-700 text-white text-sm p-2 flex flex-rows sm:flex-row justify-between items-center font-sans">
                <div className="flex items-center flex-wrap gap-1 text-sm sm:text-base">
                    <span className="font-semibold">Until the end of the sale:</span>
                    <span className="font-bold ">893</span>Days
                    <span className="font-bold ">17</span> Hours
                    <span className="font-bold ">59 </span>minutes
                    <span className="font-bold ">36</span>seconds
                    </div>
                    <span className="ml-3 font-bold">
                 
                    Buy One Get One Free on <span className="text-yellow-500 font-semibold">First Order</span></span>
                    <span className="h-4 w-px bg-white mx-2"></span>

                
                <div className="flex  items-center gap-0 ">
                    <a href="#" className="flex items-center gap-1 font-semibold hover:underline whitespace-nowrap">
                        <img src={trackIcon} alt="Truck Icon" className="w-3 h-3" />Track YourOrder</a>

                    <a href="#" className="hover:underline font-semibold"> Order Tracking</a>
                    <a href="#" className="hover:underline font-semibold"> About Us </a>
                    <select className="bg-cyan-700 text-white font-semibold outline-none">
                        <option>Eng</option>
                        <option>Esp</option>
                    </select>
                    <select className="bg-cyan-700 text-white font-semibold outline-none">
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                </div>
            </div>

        </>
    )

}
export default Header;