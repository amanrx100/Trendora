import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from "../../assets/logo.png";
import qr from "../../assets/qr.png";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png"; 
import paypal from "../../assets/paypal.png";
import mastercard from "../../assets/mastercard.png";
import Visa from "../../assets/Visa.png";
import pay from "../../assets/pay.png";

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-8 px-4 md:py-12 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 md:mb-12">
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <a href="#" className="flex items-center gap-3 font-semibold hover:underline whitespace-nowrap">
                                <img src={logo} alt="logo" className="w-32 h-8 md:w-40 md:h-10 object-contain" />
                            </a>
                        </div>
                        <p className="text-black mb-4 text-sm md:text-base">
                            We're Grocery Shop, an innovative team of food suppliers.
                        </p>
                        <div className="text-black space-y-1 text-sm md:text-base">
                            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                            <p>support@example.com</p>
                            <p>+ (406) 555-0120</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-black mb-4 text-sm md:text-base">Information</h4>
                        <ul className="space-y-2 md:space-y-3 text-black text-sm md:text-base">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Become a Vendor</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Affiliate Program</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Our Suppliers</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Extended Plan</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Community</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-black mb-4 text-sm md:text-base">Customer Support</h4>
                        <ul className="space-y-2 md:space-y-3 text-black text-sm md:text-base">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Report Abuse</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Submit and Dispute</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Policies & Rules</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Online Shopping</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-black mb-4 text-sm md:text-base">My Account</h4>
                        <ul className="space-y-2 md:space-y-3 text-black text-sm md:text-base">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">My Account</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Order History</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Shopping Cart</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Compare</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Help Ticket</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Wishlist</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-black mb-4 text-sm md:text-base">Daily Groceries</h4>
                        <ul className="space-y-2 md:space-y-3 text-black text-sm md:text-base">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Dairy & Eggs</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Meat & Seafood</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Breakfast Food</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Household Supplies</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Bread & Bakery</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Pantry Staples</a></li>
                        </ul>
                    </div>
                </div>

                <div className="p-1 mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Shop on The Go</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-6">MarketPro App is available. Get it now</p>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                        <img src={qr} alt="QR Code" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                        <div className="flex flex-col gap-2">
                            <a
                                href="#"
                                className="flex items-center gap-2 px-3 py-2 border border-amber-50 rounded-lg shadow-sm bg-white hover:bg-cyan-600 text-sm md:text-base"
                            >
                                <img src={apple} alt="Apple" className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="font-medium">App Store</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 px-3 py-2 border border-amber-50 rounded-lg shadow-sm bg-white hover:bg-cyan-600 text-sm md:text-base"
                            >
                                <img src={google} alt="Google Play" className="w-4 h-4 md:w-5 md:h-5" />
                                <span className="font-medium">Google Play</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:mt-12 border-t pt-8 md:pt-12">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex gap-4">
                            <Facebook className="w-5 h-5 hover:text-blue-600 transition-colors" />
                            <Twitter className="w-5 h-5 hover:text-blue-600 transition-colors" />
                            <Instagram className="w-5 h-5 hover:text-blue-600 transition-colors" />
                            <Linkedin className="w-5 h-5 hover:text-blue-600 transition-colors" />
                        </div>
                        <p className="text-sm text-gray-600"> 2025 Trendora. All rights reserved.</p>
                        <div className="flex gap-3">
                            <img src={paypal} alt="PayPal" className="w-16 h-6" />
                            <img src={mastercard} alt="Mastercard" className="w-16 h-6" />
                            <img src={Visa} alt="Visa" className="w-16 h-6" />
                            <img src={pay} alt="Pay" className="w-16 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
