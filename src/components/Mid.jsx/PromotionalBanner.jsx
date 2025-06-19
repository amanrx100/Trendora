import React from 'react';
import promotional1 from '../../assets/promotional1.png';
import promotional2 from '../../assets/promotional2.png';
import promotional3 from '../../assets/promotional3.png';
import promotional4 from '../../assets/promotional4.png';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




const PromotionalBanner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mx-auto max-w-7xl">

            <div class="rounded-md overflow-hidden py-6" data-aos="fade-up">
                <img src={promotional1} alt="Milk" className="absolute  " />
                <div className="relative mt-6 px-6">
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                        Everyday Fresh <br /> Milk
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Starting at <span className="text-red-500 font-semibold">$60.99</span>
                    </p>
                    <button className="mt-4 inline-flex items-center bg-cyan-700 text-white px-4 py-2 rounded-full hover:bg-cyan-800 transition-all text-sm font-medium">
                        Shop Now
                        <span className="ml-2 text-xl">→</span>
                    </button>
                </div>
            </div>


            <div class="rounded-md overflow-hidden py-6" data-aos="fade-up">
                <img src={promotional2} alt="Pouches" class="absolute" />
                <div className="relative mt-6 px-6">
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                        Daily Fresh  <br /> Vegetables
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Starting at <span className="text-red-500 font-semibold">$60.99</span>
                    </p>
                    <button className="mt-4 inline-flex items-center bg-cyan-700 text-white px-4 py-2 rounded-full hover:bg-cyan-800 transition-all text-sm font-medium">
                        Shop Now
                        <span className="ml-2 text-xl">→</span>
                    </button>
                </div>

            </div>


            <div class="rounded-md overflow-hidden py-6" data-aos="fade-up">
                <img src={promotional3} alt="Blueberries" class="absolute" />
                <div className="relative mt-6 px-6">
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                        Everyday Fresh <br /> Milk
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Starting at <span className="text-red-500 font-semibold">$60.99</span>
                    </p>
                    <button className="mt-4 inline-flex items-center bg-cyan-700 text-white px-4 py-2 rounded-full hover:bg-cyan-800 transition-all text-sm font-medium">
                        Shop Now
                        <span className="ml-2 text-xl">→</span>
                    </button>
                </div>

            </div>

            <div class="rounded-md overflow-hidden py-6" data-aos="fade-up">
                <img src={promotional4} alt="Bread" class="absolute" />
                <div className="relative mt-6 px-6">
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                        Everyday Fresh <br /> Fruit
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        Starting at <span className="text-red-500 font-semibold">$60.99</span>
                    </p>
                    <button className="mt-4 inline-flex items-center bg-cyan-700 text-white px-4 py-2 rounded-full hover:bg-cyan-800 transition-all text-sm font-medium">
                        Shop Now
                        <span className="ml-2 text-xl">→</span>
                    </button>
                </div>

            </div>
        </div>

    );
};
export default PromotionalBanner;