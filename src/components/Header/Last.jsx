import React, { useState } from "react";
import vegetableIcon from "../../assets/vegetable.png";


const categories = [
    { label: "Vegetables", icon: vegetableIcon ,isImage:true},
    { label: "Milk & Cake", icon: "🥛" },
    { label: "Grocery", icon: "🛒" },
    { label: "Beauty", icon: "💄" },
    { label: "Wines & Drinks", icon: "🍷" },
    { label: "Snacks", icon: "🍪" },
    { label: "Juice", icon: "🍹" },
    { label: "Fruits", icon: "🍎" },
    { label: "Tea & Coffee", icon: "🍵" },
];

const BrowseCategories = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div
            className="relative font-roboto"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
        >
            <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 text-md font-roboto">
                <span className="text-xl">🧺</span> Browse Categories ▾
            </button>

            {showDropdown && (
                <div className="absolute left-0 mt-2 w-[320px] bg-white border shadow-lg rounded-lg p-4 grid grid-cols-3 gap-4 z-50 font-roboto">
                    {categories.map((item, index) => (
                        <div key={index} className="text-center hover:opacity-80 cursor-pointer">
                            <div className="text-3xl">{item.icon}</div>
                            <div className="text-sm font-semibold mt-2 text-gray-800">{item.label}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const Navbar = () => {
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

            <nav className="bg-white shadow-sm px-4 py-3 font-roboto">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-4">
                        <BrowseCategories />

                        <div className="hidden md:flex items-center gap-4">
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('home')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href="#" className="text-black hover:text-blue-700 flex items-center gap-1 font-roboto">
                                    Home ▾
                                </a>
                                {activeDropdown === 'home' && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white border border-white shadow-lg rounded-lg py-2 z-50">
                                        <a href="#" className="block px-4 py-2 text-blue-600 hover:bg-gray-50">Home Grocery</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Home Electronics</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Home Fashion</a>
                                    </div>
                                )}
                            </div>

                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('shop')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href="#" className="text-black hover:text-blue-700 flex items-center gap-1 font-roboto">
                                    Shop ▾
                                </a>
                                {activeDropdown === 'shop' && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white border border-white shadow-lg rounded-lg py-2 z-50">
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Shop</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Shop Details</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Shop Details Two</a>
                                    </div>
                                )}
                            </div>

                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('pages')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href="#" className="text-black hover:text-blue-700 flex items-center gap-1 font-roboto">
                                    Pages ▾
                                </a>
                                <span className="absolute -top-6 left-0 bg-purple-800 text-white text-xs px-2 py-1 rounded-full animate-pulse font-roboto">New</span>
                                {activeDropdown === 'pages' && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white border border-white shadow-lg rounded-lg py-2 z-50">
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Cart</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Wishlist</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Checkout</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Become Seller</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Account</a>
                                    </div>
                                )}
                            </div>

                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('vendors')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href="#" className="text-black hover:text-blue-700 flex items-center gap-1 font-roboto">
                                    Vendors ▾
                                </a>
                                <span className="absolute -top-6 left-0 bg-amber-400 text-white text-xs px-2 py-1 rounded-full animate-pulse font-roboto">New</span>
                                {activeDropdown === 'vendors' && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white border border-white shadow-lg rounded-lg py-2 z-50">
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Vendors</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Vendor Details</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Vendor Two</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Vendor Two Details</a>
                                    </div>
                                )}
                            </div>

                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter('blog')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href="#" className="text-black hover:text-blue-700 flex items-center gap-1 font-roboto">
                                    Blog ▾
                                </a>
                                {activeDropdown === 'blog' && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white border border-white shadow-lg rounded-lg py-2 z-50">
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Blog</a>
                                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Blog Details</a>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="text-gray-700 hover:text-blue-600 font-roboto">
                                Contact Us
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-2 text-gray-700 font-roboto">
                        <span className="text-blue-600">📞</span>
                        <div className="flex flex-col text-right">
                            <span className="text-md font-bold">Need any Help! call Us</span>
                            <span className="text-cyan-600 font-bold">+(2) 871 382 023</span>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-blue-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
