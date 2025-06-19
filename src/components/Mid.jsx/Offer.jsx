import React from 'react';
import offer1 from '../../assets/offer1.png';
import offer2 from '../../assets/offer2.png';
import offerlogo from '../../assets/offerlogo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Offer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
                <div className="relative rounded-lg overflow-hidden py-6" data-aos="fade-up">
                    <img src={offer1} alt="Flash Sale" className="w-full h-full object-cover rounded-lg" />

                    <div className="absolute inset-0 bg-transparent bg-opacity-10 flex items-center justify-end text-black p-4">
                        <div className="flex flex-col items-start text-right space-y-3 pr-4" >
                            <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full  mb-3">
                                <img src={offerlogo} alt="Brand Logo" className="h-8 w-8 object-contain" />
                            </div>
                            <h2 className="text-xl font-bold">X-Connect Smart Television</h2>
                            <p className="text-sm">Time remaining until the end of the offer.</p>

                            <button className="bg-cyan-600 space-x-4 hover:bg-cyan-700 text-white pr-4 px-6 py-2 rounded-full">
                                Shop Now →
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative rounded-md overflow-hidden py-6" data-aos="fade-up">
                    <img src={offer2} alt="Flash Sale" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-transparent bg-opacity-10 flex items-center justify-start text-black p-4">
                        <div className="flex flex-col items-start text-left space-y-3 pr-4 pl-10" >

                            <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full  mb-3">
                                <img src={offerlogo} alt="Brand Logo" className="h-8 w-8 object-contain" />
                            </div>
                            <h2 className="max-w-md text-left text-2xl font-bold mb-2">Vegetables Combo Box</h2>
                            <p className="text-sm">Time remaining until the end of the offer.</p>

                            <button className="bg-cyan-600 space-x-4 hover:bg-cyan-700 justify-around text-white pr-4 px-6 py-2 rounded-full">
                                Shop Now →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Offer;