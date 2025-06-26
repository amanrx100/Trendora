import React, { useState } from "react";
import mobile from "../../assets/mobile.png";
import { Link } from 'react-router-dom'; 

const categories = [
    { label: "Vegetables", icon: "🥦" },
    { label: "Milk & Cake", icon: "🥛" },
    { label: "Grocery", icon: "🛒" },
    { label: "Beauty", icon: "💄" },
    { label: "Wines & Drinks", icon: "🍷" },
    { label: "Snacks", icon: "🍪" },
    { label: "Juice", icon: "🍹" },
    { label: "Fruits", icon: "🍎" },
    { label: "Tea & Coffee", icon: "☕" },
];

const BrowseCategories = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div
            className="relative font-roboto"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
        >
            <button className="bg-green-500 text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-sm md:text-base font-roboto">
                <span className="text-2xl md:text-3xl w-3 h-10"></span> Browse Categories ▾
            </button>

            {showDropdown && (
                <div className="absolute left-0 mt-2 w-[280px] sm:w-[320px] bg-white border shadow-lg rounded-lg p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 z-50 font-roboto">
                    {categories.map((item, index) => (
                        <div key={index} className="text-center hover:opacity-80 cursor-pointer">
                            <div className="text-2xl sm:text-3xl">{item.icon}</div>
                            <div className="text-xs sm:text-sm font-semibold mt-1 sm:mt-2 text-gray-800">{item.label}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const NavBar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (dropdownName) => {
        setActiveDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <nav className="bg-white shadow-sm px-2 sm:px-4 py-2 sm:py-3 font-roboto">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <BrowseCategories />

                        <div className="hidden sm:flex items-center gap-3 sm:gap-4">
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('home')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href="#" className="text-black hover:text-blue-700 flex items-center gap-1 text-sm sm:text-base font-roboto">
                                    Home ▾
                                </a>
                                {activeDropdown === 'home' && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white border border-white shadow-lg rounded-lg py-2 z-50">
                                        <a href="#" className="block px-3 py-1.5 text-blue-600 hover:bg-gray-50">Home Grocery</a>
                                        <a href="#" className="block px-3 py-1.5 text-gray-700 hover:bg-gray-50">Home Electronics</a>
                                        <a href="#" className="block px-3 py-1.5 text-gray-700 hover:bg-gray-50">Home Fashion</a>
                                    </div>
                                )}
                            </div>

                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('shop')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href="#" className="text-black hover:text-blue-700 flex items-center gap-1 text-sm sm:text-base font-roboto">
                                    Shop ▾
                                </a>
                                {activeDropdown === 'shop' && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white border border-white shadow-lg rounded-lg py-2 z-50">
                                        <a href="#" className="block px-3 py-1.5 text-gray-700 hover:bg-gray-50">Shop</a>
                                        <a href="#" className="block px-3 py-1.5 text-gray-700 hover:bg-gray-50">Shop Details</a>
                                        <a href="#" className="block px-3 py-1.5 text-gray-700 hover:bg-gray-50">Shop Details Two</a>
                                    </div>
                                )}
                            </div>

                            {/* Pages with badge */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('pages')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="absolute -top-4 left-2 text-[10px] text-white bg-yellow-400 px-1.5 py-0.5 rounded font-bold animate-pulse z-10 after:content-[''] after:absolute after:-bottom-1 after:left-3 after:w-0 after:h-0 after:border-l-[4px] after:border-r-[4px] after:border-t-[4px] after:border-l-transparent after:border-r-transparent after:border-t-yellow-400">
                                    New
                                </span>
                                <a href="#" className="text-black hover:text-blue-700 flex items-center gap-1 text-sm sm:text-base font-roboto">
                                    Pages ▾
                                </a>
                                {activeDropdown === 'pages' && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white border border-white shadow-lg rounded-lg py-2 z-50">
                                        <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-100">WishList</Link> 
                                        <Link to="/checkout" className="block px-4 py-2 hover:bg-gray-100">Checkout</Link> 
                                         <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Account</Link> 
                                    </div>
                                )}
                            </div>

                            {/* Blog with badge */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('blog')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="absolute -top-4 left-2 text-[10px] text-white bg-purple-500 px-1.5 py-0.5 rounded font-bold animate-pulse z-10 after:content-[''] after:absolute after:-bottom-1 after:left-3 after:w-0 after:h-0 after:border-l-[4px] after:border-r-[4px] after:border-t-[4px] after:border-l-transparent after:border-r-transparent after:border-t-purple-500">
                                    New
                                </span>
                                <a href="#" className="text-black hover:text-blue-700 flex items-center gap-1 text-sm sm:text-base font-roboto">
                                    Blog ▾
                                </a>
                                {activeDropdown === 'blog' && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white border border-white shadow-lg rounded-lg py-2 z-50">
                                        <a href="#" className="block px-3 py-1.5 text-gray-700 hover:bg-gray-50">Blog Grid</a>
                                        <a href="#" className="block px-3 py-1.5 text-gray-700 hover:bg-gray-50">Blog Details</a>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="text-black hover:text-blue-700 flex items-center gap-1 text-sm sm:text-base font-roboto">
                                Contact Us
                            </a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 text-sm">
                        <img src={mobile} alt="Phone" className="w-3 h-5" />
                        <div>
                            <p className="text-black font-semibold">Need any Help! call Us</p>
                            <p className="text-sky-700 font-bold">+(2) 871 382 023</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
