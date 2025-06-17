import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { MdStore } from "react-icons/md";
import basket1 from "../../assets/basket1.png";
import basket2 from "../../assets/basket2.png";
import basket3 from "../../assets/basket3.png";
import basket4 from "../../assets/basket4.png";
import special from "../../assets/special.png";

const BestSellSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const products = [
    { id: 1, title: "Taylor Farms Broccoli Florets Vegetables", img: basket1 },
    { id: 2, title: "Taylor Farms Broccoli Florets Vegetables", img: basket2 },
    { id: 3, title: "Taylor Farms Broccoli Florets Vegetables", img: basket3 },
    { id: 4, title: "Taylor Farms Broccoli Florets Vegetables", img: basket4 },
  ];

  return (
    <section className="px-4 md:px-10 py-10 bg-white">
      <h2 className="text-3xl font-bold text-[#1c1c1c] mb-8" data-aos="fade-up">
        Daily Best Sells
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-xl p-4 shadow hover:shadow-md transition"
            data-aos="fade-up"
          >
            <div className="relative">
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Sale 50%
              </span>
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-36 object-contain mt-4"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm mb-1">
                <span className="line-through text-gray-400">$28.99</span>
                <span className="text-xl font-bold text-[#1c1c1c]">$14.99</span>
                <span className="text-sm text-gray-500">/Qty</span>
              </div>

              <div className="flex items-center gap-1 text-yellow-500 text-sm mb-1">
                <span>4.8</span>
                <FaStar />
                <span className="text-gray-600">(17k)</span>
              </div>

              <p className="text-md font-semibold text-[#1c1c1c]">{product.title}</p>

              <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                <MdStore />
                <span>By Lucky Supermarket</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded mt-2">
                <div className="bg-sky-500 h-2 rounded" style={{ width: "51%" }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Sold: 18/35</p>

              {/* Countdown Timer Placeholder */}
              <div className="flex gap-2 mt-3 text-xs text-gray-700 font-semibold">
                {["Days", "Hours", "Min", "Sec"].map((label) => (
                  <span key={label} className="px-2 py-1 bg-blue-100 rounded">{label}</span>
                ))}
              </div>

              {/* Add to Cart Button */}
              <button className="mt-4 w-full bg-blue-100 text-blue-800 py-2 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-blue-200 transition">
                Add To Cart <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}

        {/* Promo Box */}
        <div
          className="bg-[#f7f7f7] rounded-xl p-6 flex flex-col justify-between"
          data-aos="fade-up"
        >
          <div>
            <div className="w-12 h-12 bg-white rounded-full mb-4 flex items-center justify-center text-center font-bold text-orange-500 border border-orange-300">
              🧺
            </div>
            <h3 className="text-2xl font-bold text-[#1c1c1c] mb-2">
              $5 off your first order
            </h3>
            <p className="text-sm text-gray-600 mb-1">Delivery by 6:15am</p>
            <p className="text-xs text-gray-400 mb-4">Expire Aug 5</p>

            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2">
              Shop Now <span>→</span>
            </button>
          </div>

          <img src={special} alt="Promo" className="w-full mt-4 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default BestSellSection;
