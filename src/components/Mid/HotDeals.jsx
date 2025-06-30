import React from 'react';
import hotdeals from "../../assets/hotdeals.png";
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import { ShoppingCart, Star } from 'lucide-react'; 




const HotDeals = () => {
    const products = [
        {
            id: 1,
            title: "Taylor Farms Broccoli Florets Vegetables",
            price: "$14.99",
            originalPrice: "$28.99",
            rating: 4.8,
            reviews: "(17k)",
            sold: "18/35",
            image: product1, // replace with your image path
        },
        {
            id: 2,
            title: "Taylor Farms Broccoli Florets Vegetables",
            price: "$14.99",
            originalPrice: "$28.99",
            rating: 4.8,
            reviews: "(17k)",
            sold: "18/35",
            image: product2
        }, {
            id: 3,
            title: "Taylor Farms Broccoli Florets Vegetables",
            price: "$14.99",
            originalPrice: "$28.99",
            rating: 4.8,
            reviews: "(17k)",
            sold: "18/35",
            image: p1
        }, {
            id: 4,
            title: "Taylor Farms Broccoli Florets Vegetables",
            price: "$14.99",
            originalPrice: "$28.99",
            rating: 4.8,
            reviews: "(17k)",
            sold: "18/35",
            image: p2
        },
    ];
    return (
        <>
            <section className="py-10 px-2 md:px-10 bg-white mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mx-auto max-w-7xl items-start">

                    {/* Promo Card */}
                    {/* Promo Card */}
                    <div className="relative lg:col-span-2 md:col-span-2 bg-[#007C91] text-white rounded-2xl flex flex-col justify-between p-6 lg:p-8 w-full h-80 gap-4 aspect-[3/4] overflow-hidden">
                        <div className="space-y-3 z-10">
                            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded">Medical equipment</span>
                            <h2 className="text-2xl font-bold">Deals of the day</h2>
                            <p className="text-sm text-green-300">Save up to 50% off on your first order</p>
                            <div className="flex gap-2 mt-2 text-black font-semibold">
                                {["874D", "16 H", "1 M", "20 S"].map((t, i) => (
                                    <div key={i} className="bg-white px-2 py-1 rounded-md text-center text-xs">
                                        {t}
                                    </div>
                                ))}
                            </div>
                            <button className="bg-white text-[#007C91] font-semibold px-2 py-1 rounded-full mt-4">
                                Explore Shop →
                            </button>
                        </div>

                        {/* Basket Image */}
                        <img
                            src={hotdeals}
                            alt="Hot Deals Basket"
                            className="absolute bottom-0 right-0 w-50 h-50 lg:w-60 object-contain "
                        />
                    </div>


                    {/* Product Cards */}
                    {products.map((product) => (
                        <div key={product.id} className="bg-white  w-50 h-80 border border-gray-300 rounded-lg p-4 group hover:border-cyan-700" >
                            <div className="relative">
                                <img src={product.image} alt={product.title} className="w-full h-36 object-contain mb-4 group:hover-scale-100 overflow-hidden" />
                                <button className="absolute top-2 right-2 bg-blue-100 text-[#0766AD] text-sm px-3 py-1 rounded-full flex items-center space-x-1">
                                    <span>Add</span>
                                    <ShoppingCart size={14} />
                                </button>
                            </div>

                            <div className="text-gray-800 text-sm font-semibold">
                                {product.price}
                                <span className="line-through ml-2 text-gray-400 text-xs">{product.originalPrice}</span>
                            </div>

                            <div className="text-xs text-gray-700 mt-1">{product.title}</div>

                            <div className="flex items-center text-yellow-500 text-sm mt-1">
                                <Star size={14} fill="currentColor" />
                                <span className="ml-1">{product.rating}</span>
                                <span className="ml-1 text-gray-500">{product.reviews}</span>
                            </div>

                            <p className="text-xs text-gray-500 mt-1">Sold: {product.sold}</p>
                        </div>
                    ))}
                </div>
            </section>


        </>
    )
}
export default HotDeals;