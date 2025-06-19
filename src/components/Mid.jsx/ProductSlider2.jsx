import React from 'react';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.png';
import p6 from '../../assets/p6.png';
import p7 from '../../assets/p7.png';
import p8 from '../../assets/p8.png';
import p9 from '../../assets/p9.png';
import p10 from '../../assets/p10.png';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import { Star } from "lucide-react";



const ProductSlider2 = () => {
    const product = [
        {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: "$14.99",
          originalPrice: "$28.99",
          rating: 4.8,
          reviews: 17,
          sold: "18/35",
          image: p1,
          badge: "New",
          
        },
         {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: "$14.99",
          originalPrice: "$28.99",
          rating: 4.8,
          reviews: 17,
          sold: "18/35",
          image: p2,
            badge: "50% Sale",
          
        },
         {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: "$14.99",
          originalPrice: "$28.99",
          rating: 4.8,
          reviews: 17,
          sold: "18/35",
          image: p3,
            badge: "Best Sale",
          
        },
         {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: "$14.99",
          originalPrice: "$28.99",
          rating: 4.8,
          reviews: 17,
          sold: "18/35",
          image: p4,
            badge: "New",
        
        },
         {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: "$14.99",
          originalPrice: "$28.99",
          rating: 4.8,
          reviews: 17,
          sold: "18/35",
          image: p5,
            badge: "50% Sale",
          
        },
         {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: "$14.99",
          originalPrice: "$28.99",
          rating: 4.8,
          reviews: 17,
          sold: "18/35",
          image: p6,
            badge: "Best Sale",
          
        },
         {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: "$14.99",
          originalPrice: "$28.99",
          rating: 4.8,
          reviews: 17,
          sold: "18/35",
          image: p7,
            badge: "New",
          
        },
         {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: "$14.99",
          originalPrice: "$28.99",
          rating: 4.8,
          reviews: 17,
          sold: "18/35",
          image: p8,
            badge: "50% Sale",
          
        },
         {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: "$14.99",
          originalPrice: "$28.99",
          rating: 4.8,
          reviews: 17,
          sold: "18/35",
          image: p9,
            badge: "Best Sale",
          
        },
         {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: "$14.99",
          originalPrice: "$28.99",
          rating: 4.8,
          reviews: 17,
          sold: "18/35",
          image: p10,
            badge: "New",
          
        },
         {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: "$14.99",
          originalPrice: "$28.99",
          rating: 4.8,
          reviews: 17,
          sold: "18/35",
          image: product1,
            badge: "50% Sale",
          
        },
         {
          id: 1,
          name: "Taylor Farms Broccoli Florets Vegetables",
          price: "$14.99",
          originalPrice: "$28.99",
          rating: 4.8,
          reviews: 17,
          sold: "18/35",
          image: product2,
            badge: "Best Sale",
          

        },
    ];
        const getBadgeColor = (badge) => {
    switch (badge) {
      case "New":
        return "bg-green-500";
      case "50% Sale":
        return "bg-red-500";
      case "Best Sale":
        return "bg-yellow-500 text-black";
      default:
        return "bg-gray-400";
    }
}
    

    return (
        
        <>
         <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {product.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-200 hover:border-cyan-700 duration-200 h-96 md:h-[420px] lg:h-[340px] lg:w-[200px] p-4 group"
          >
            <div className="relative mx-3 mt-3 h-32 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-24 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className={`absolute top-1 left-1 text-xs font-semibold px-2 py-1 rounded ${getBadgeColor(product.badge)} text-white`}>
                {product.badge}
              </span>
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
                  <div className="bg-blue-500 h-1 rounded-full w-[51%]"></div>
                </div>
              </div>

              <div className="text-xs text-gray-500">Sold: {product.sold}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
        </>
    )
}
export default ProductSlider2;