import React, { useEffect } from 'react';
import flash1 from '../../assets/flash1.png';
import flash2 from '../../assets/flash2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FlashSale = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
            <div className="relative rounded-md overflow-hidden py-6" data-aos="fade-up">
                <img src={flash1} alt="Flash Sale" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-transparent bg-opacity-10 flex items-center justify-end text-black p-4">
                    <div className="flex flex-col items-end text-right space-y-3 pr-4" >
                        <h2 className="text-xl font-bold">X-Connect Smart Television</h2>
                        <p className="text-sm">Time remaining until the end of the offer.</p>
                        <div className="flex space-x-4 text-sm font-semibold">
                            <span className="bg-white text-gray-900 px-3 py-1 rounded">942 D :</span>
                            <span className="bg-white text-gray-900 px-3 py-1 rounded">15 H :</span>
                            <span className="bg-white text-gray-900 px-3 py-1 rounded">47 M :</span>
                            <span className="bg-white text-gray-900 px-3 py-1 rounded">37 S</span>
                        </div>
                        <button className="bg-cyan-600 space-x-4 hover:bg-cyan-700 text-white pr-4 px-6 py-2 rounded-full">
                            Shop Now →
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative rounded-md overflow-hidden py-6" data-aos="fade-up">
                <img src={flash2} alt="Flash Sale" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-transparent bg-opacity-10 flex items-center justify-start text-black p-4">
                    <div className="flex flex-col items-end text-left space-y-3 pr-4 pl-10" >
                        <h2 className="max-w-md text-left text-2xl font-bold mb-2">Vegetables Combo Box</h2>
                        <p className="text-sm">Time remaining until the end of the offer.</p>
                        <div className="flex space-x-4 text-sm font-semibold">
                            <span className="bg-cyan-600 text-gray-900 px-3 py-1 rounded">942 D :</span>
                            <span className="bg-cyan-600 text-gray-900 px-3 py-1 rounded">15 H :</span>
                            <span className="bg-cyan-600 text-gray-900 px-3 py-1 rounded">47 M :</span>
                            <span className="bg-cyan-600 text-gray-900 px-3 py-1 rounded">37 S</span>
                        </div>
                        <button className="bg-cyan-600 space-x-4 hover:bg-cyan-700 justify-around text-white pr-4 px-6 py-2 rounded-full">
                            Shop Now →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;
