import React from "react";
import { ShoppingCart, Star, Store } from "lucide-react";
import basket1 from "../../assets/basket1.png";
import basket2 from "../../assets/basket2.png";
import basket3 from "../../assets/basket3.png";
import basket4 from "../../assets/basket4.png";
import special from "../../assets/special.png";
import offer from "../../assets/offer.png";



const products = [
  {
    id: 1,
    title: "Taylor Farms Broccoli Florets Vegetables",
    price: 14.99,
    originalPrice: 28.99,
    rating: 4.8,
    reviews: "17k",
    vendor: "Lucky Supermarket",
    sold: 18,
    total: 35,
    image: basket1,
    days: "",
    hours: "",
    minutes: "",
    seconds: ""
  },
  {
    id: 2,
    title: "Taylor Farms Broccoli Florets Vegetables",
    price: 14.99,
    originalPrice: 28.99,
    rating: 4.8,
    reviews: "17k",
    vendor: "Lucky Supermarket",
    sold: 18,
    total: 35,
    image: basket2,
    days: "",
    hours: "",
    minutes: "",
    seconds: ""
  },
  {
    id: 3,
    title: "Taylor Farms Broccoli Florets Vegetables",
    price: 14.99,
    originalPrice: 28.99,
    rating: 4.8,
    reviews: "17k",
    vendor: "Lucky Supermarket",
    sold: 18,
    total: 35,
    image: basket3,
    days: "889",
    hours: "8",
    minutes: "17",
    seconds: "57"
  },
  {
    id: 4,
    title: "Taylor Farms Broccoli Florets Vegetables",
    price: 14.99,
    originalPrice: 28.99,
    rating: 4.8,
    reviews: "17k",
    vendor: "Lucky Supermarket",
    sold: 18,
    total: 35,
    image: basket4,
    days: "",
    hours: "",
    minutes: "",
    seconds: ""
  },
];

const ProductCard = ({ product }) => {
  const progress = Math.floor((product.sold / product.total) * 100);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-300 p-3 flex w-full">
      {/* Image & Sale badge */}
      <div className="relative w-1/4 min-w-[100px]">
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
          Sale 50%
        </span>
        <img
          src={product.image}
          alt="product"
          className="w-full h-36 object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col justify-between px-3">
        {/* Top: Price, Rating, Title, Vendor, Progress */}
        <div>
          {/* Price */}
          <div className="text-sm text-gray-500 line-through">
            ${product.originalPrice.toFixed(2)}
            <span className="text-lg text-gray-900 font-bold ml-2">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-400"> /Qty</span>
          </div>

          {/* Rating */}
          <div className="flex items-center text-sm mt-1 text-yellow-500">
            <span className="mr-1">{product.rating}</span>
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
            <span className="text-gray-600">({product.reviews})</span>
          </div>

          {/* Title */}
          <h2 className="font-semibold text-gray-800 mt-1 text-sm">
            {product.title}
          </h2>

          {/* Vendor */}
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <Store className="w-4 h-4 mr-1 text-sky-500" />
            By {product.vendor}
          </div>

          {/* Progress bar */}
          <div className="mt-2">
            <div className="w-full h-1 bg-gray-200 rounded-full">
              <div
                className="h-1 bg-sky-500 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Sold: {product.sold}/{product.total}
            </p>
          </div>
        </div>

        {/* Middle: Countdown timer */}
        <div className="flex justify-start mt-4">
          <div className="flex gap-1 text-xs text-gray-500">
            <span className="bg-gray-100 px-2 py-1 rounded">Days</span>
            <span className="bg-gray-100 px-2 py-1 rounded">:</span>
            <span className="bg-gray-100 px-2 py-1 rounded">Hours</span>
            <span className="bg-gray-100 px-2 py-1 rounded">:</span>
            <span className="bg-gray-100 px-2 py-1 rounded">Min</span>
            <span className="bg-gray-100 px-2 py-1 rounded">:</span>
            <span className="bg-gray-100 px-2 py-1 rounded">Sec</span>
          </div>
        </div>

        {/* Bottom: Add to cart */}
        <button className="mt-4 bg-sky-100 hover:bg-sky-200 text-sky-700 text-sm font-semibold py-2 rounded-lg flex justify-center items-center gap-2">
          Add To Cart <ShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
const PromoCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200  relative overflow-hidden h-full">
      {/* Logo */}
      <div className="flex justify-center mb-2">
        <img
          src={special}
          alt="Promo"
          className="w-200 h-123 absolute"
        /><div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
          {/* Logo */}
          <img src={offer} alt="Logo" className="w-16 h-16 mb-4" />

          {/* Text Content */}
          <p className="text-white text-xl font-bold">$5 off your first order</p>
          <p className="text-white text-sm mt-1">Delivery by 6:15am</p>
          <p className="text-white text-sm mb-4">Expire Aug 5</p>

          {/* CTA Button */}
          <button className="bg-white text-black font-semibold text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition flex items-center gap-1">
            Shop Now <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>








      <div className="relative flex-1">



      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6 items-start">
          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Promo Card */}
          <div className="w-80 self-stretch">
            <PromoCard />
          </div>
        </div>
      </div>
    </div>
  );
}