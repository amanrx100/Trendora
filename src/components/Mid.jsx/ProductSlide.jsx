import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShoppingCart, Star } from 'lucide-react';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';
import product5 from '../../assets/product5.png';
import product6 from '../../assets/product6.png';

const ProductGrid = () => {
   useEffect(() => {
          AOS.init({
              duration: 1000,
              once: true,
          });
      }, []);
  const product = [
    {
      id: 1,
      name: "Taylor Farms Broccoli Florets Vegetables",
      price: "$14.99",
      originalPrice: "$28.99",
      rating: 4.8,
      reviews: 17,
      sold: "18/35",
      image: product1,
      bgColor: "bg-green-50"
    },
    {
      id: 2,
      name: "Taylor Farms Broccoli Florets Vegetables",
      price: "$14.99",
      originalPrice: "$28.99",
      rating: 4.8,
      reviews: 17,
      sold: "18/35",
      image: product2,
      bgColor: "bg-blue-50"
    },
    {
      id: 3,
      name: "Taylor Farms Broccoli Florets Vegetables",
      price: "$14.99",
      originalPrice: "$28.99",
      rating: 4.8,
      reviews: 17,
      sold: "18/35",
      image: product3,
      bgColor: "bg-red-50"
    },
    {
      id: 4,
      name: "Taylor Farms Broccoli Florets Vegetables",
      price: "$14.99",
      originalPrice: "$28.99",
      rating: 4.8,
      reviews: 17,
      sold: "18/35",
      image: product4,
      bgColor: "bg-cyan-50"
    },
    {
      id: 5,
      name: "Taylor Farms Broccoli Florets Vegetables",
      price: "$14.99",
      originalPrice: "$28.99",
      rating: 4.8,
      reviews: 17,
      sold: "18/35",
      image: product5,
      bgColor: "bg-orange-50"
    },
    {
      id: 6,
      name: "Taylor Farms Broccoli Florets Vegetables",
      price: "$14.99",
      originalPrice: "$28.99",
      rating: 4.8,
      reviews: 17,
      sold: "18/35",
      image: product6,
      bgColor: "bg-green-100"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {product.map((product) => (
          <div
            key={product.id}
            
            className="bg-white rounded-xl border border-gray-200  hover:border-cyan-700    duration-200 h-96 md:h-[420px] lg:h-[340px]  lg:w-[200px] p-4 group"
          >

            <div className="relative mx-3 mt-3 h-32 rounded-lg flex items-center justify-center">
              <img src={product.image} alt={product.name} className="h-24 object-contain group-hover:scale-150" />
              <button className="absolute top-1 right-1 bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-full text-xs flex items-center justify-center ">
                 Add <ShoppingCart size={16} />
              </button>
            </div>

            <div className="p-3">

              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-gray-900">{product.price}</span>
                <span className="text-sm text-gray-400">/Qty</span>
                <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
              </div>


              <div className="flex items-center gap-1 mb-2">
                <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                <Star size={14} className="text-yellow-400 fill-current" />
                <span className="text-xs text-gray-500">({product.reviews}k)</span>
              </div>


              <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 leading-tight">
                {product.name}
              </h3>


              <div className="mb-2">
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-blue-500 h-1 rounded-full w-51vwh"></div>
                </div>
              </div>


              <div className="text-xs text-gray-500">
                Sold: {product.sold}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;