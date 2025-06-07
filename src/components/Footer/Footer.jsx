import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from "../Header/logo.png";
import qr from "../Footer/qr.png";
import apple from "../Header/apple.png";
import google from "../Header/google.png"; 
import paypal from "../Footer/paypal.png";
import mastercard from "../Footer/mastercard.png";
import Visa from "../Footer/Visa.png";
import pay from "../Footer/pay.png";

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <a href="#" className="flex items-center gap-3 font-semibold hover:underline whitespace-nowrap">
                                <img src={logo} alt="logo" className="w-40 h-10 object-contain" />
                            </a>
                        </div>
                        <p className="text-black mb-4">
                            We're Grocery Shop, an innovative team of food suppliers.
                        </p>
                        <div className="text-black space-y-1">
                            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                            <p>support@example.com</p>
                            <p>+ (406) 555-0120</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-black mb-4">Information</h4>
                        <ul className="space-y-3 text-black">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Become a Vendor</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Affiliate Program</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Our Suppliers</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Extended Plan</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Community</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-black mb-4">Customer Support</h4>
                        <ul className="space-y-3 text-black">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Report Abuse</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Submit and Dispute</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Policies & Rules</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Online Shopping</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-black mb-4">My Account</h4>
                        <ul className="space-y-3 text-black">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">My Account</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Order History</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Shopping Cart</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Compare</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Help Ticket</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Wishlist</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-black mb-4">Daily Groceries</h4>
                        <ul className="space-y-3 text-black">
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Shop on The Go</h3>
                    <p className="text-gray-600 mb-6">MarketPro App is available. Get it now</p>

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <img src={qr} alt="QR Code" className="w-24 h-24 object-contain" />
                        <div className="flex flex-col gap-3">
                            <a
                                href="#"
                                className="flex items-center gap-2 px-4 py-2 border border-amber-50 rounded-lg shadow-sm bg-white hover:bg-cyan-600"
                            >
                                <img src={apple} alt="Apple" className="w-5 h-5" />
                                <span className="font-medium">App Store</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-2 px-4 py-2 border border-amber-50 rounded-lg shadow-sm bg-white hover:bg-cyan-600"
                            >
                                <img src={google} alt="Google Play" className="w-5 h-5" />
                                <span className="font-medium">Google Play</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6 gap-6">
                        <img src={paypal} alt="PayPal" className="h-6" />
                        <img src={mastercard} alt="MasterCard" className="h-6" />
                        <img src={Visa} alt="VISA" className="h-6" />
                        <img src={pay} alt="Amazon Pay" className="h-6" />
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4 pb-0 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-black mb-2 sm:mb-0">
                        Copyright © <span className="text-green-500 font-semibold">2025</span> Ui-drops All Rights Reserved
                    </p>
                    <div className="flex items-center gap-2">
                        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
