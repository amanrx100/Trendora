import React from 'react';
import logo from "../Header/logo.png";
import search from "../Header/search.png";
import user from "../Header/user.png";
import heart from "../Header/heart.png";
import Shopping from "../Header/Shopping.png";


const Middle = () => {
    return (
        <>
            <div className="w-full bg-white  text-sm p-3 flex flex-rows sm:flex-row justify-start gap-y-4 sm:gap-y-0 sm:gap-x-6 items-center font-sans">
                <div className="flex items-center flex-wrap gap-1 text-sm sm:text-base">
                    <a href="#" className="flex items-center gap-3 font-semibold hover:underline whitespace-nowrap">
                        <img src={logo} alt="logo" className="w-55 h-10" /></a>
                </div>
                <div className="flex items-center w-full sm:w-2/3 sm:h-10  border border-gray-200 rounded overflow-hidden">
                    <select className=" bg-white-200 px-1 py-1 text-sm border-r border-white-200">
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
                        className="flex-grow px-4 py-2 outline-none text-sm"
                    />
                    <button className="bg-cyan-600 text-white rounded px-4 py-2">
                        <img src={search} alt="logo" className="w-5 h-5" />
                    </button>
                </div>
                <div className=" flex item-center  gap-5">
                     <a href="#" className="flex items-center gap-3 text-sm hover:text-sky-700">
                        <img src={user} alt="user" className="w-4 h-4"/>Profile</a>
                    <a href="#" className="flex items-center gap-3 text-sm hover:text-sky-700">
                        <img src={heart} alt="logo" className="w-4 h-4"/>Wishlist</a>
                    <a href="#" className="flex items-center gap-3 text-sm hover:text-sky-700">
                        <img src={Shopping} alt="logo" className="w-4 h-4"/>Cart</a>
                </div>
            </div>
        </>
    )
}
export default Middle;