import React from 'react';
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import user from "../../assets/user.png";
import heart from "../../assets/heart.png";
import Shopping from "../../assets/Shopping.png";

const Middle = () => {
    return (
        <>
            <div className="w-full bg-white text-sm p-2 sm:p-3 flex flex-col sm:flex-row justify-start gap-y-3 sm:gap-y-0   sm:gap-x-6 items-center font-sans">
                <div className="flex items-center flex-wrap gap-1 text-xs sm:text-sm md:text-base mx-auto">
                    <a href="#" className="flex items-center gap-2 font-semibold hover:underline whitespace-nowrap">
                        <img src={logo} alt="logo" className="w-40 h-8 md:w-55 md:h-10 object-contain" />
                    </a>
                </div>
                <div className="flex items-center w-full sm:w-2/3 md:w-3/4 lg:w-1/2 h-8 sm:h-10 border border-gray-200 rounded overflow-hidden shadow-2xl">
                    <select className="bg-white px-2 py-1 text-xs sm:text-sm border-r border-gray-200">
                        <option>All Categories</option>
                        <option>Grocery</option>
                        <option>Breakfast & dairy</option>
                        <option>Vegetables</option>
                        <option>Milk & Diaries</option>
                        <option>Pet Food & Toy</option>
                        <option>Breads & Bakery</option>
                        <option>Noodles & Rice</option>
                        <option>Fresh Seafood</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search for products, categories or brands..."
                        className="flex-grow px-3 py-1.5 outline-none text-xs sm:text-sm"
                    />
                    <button className="bg-cyan-600 text-white rounded px-3 py-1.5">
                        <img src={search} alt="Search" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                    <a href="#" className="flex items-center gap-2 text-xs sm:text-sm hover:text-sky-700">
                        <img src={user} alt="User" className="w-3 h-3 sm:w-4 sm:h-4" />Profile</a>
                    <a href="#" className="flex items-center gap-2 text-xs sm:text-sm hover:text-sky-700">
                        <img src={heart} alt="Wishlist" className="w-3 h-3 sm:w-4 sm:h-4" />Wishlist</a>
                    <a href="#" className="flex items-center gap-2 text-xs sm:text-sm hover:text-sky-700">
                        <img src={Shopping} alt="Cart" className="w-3 h-3 sm:w-4 sm:h-4" />Cart</a>
                </div>
            </div>
        </>
    )
}
export default Middle;