import React, { useEffect, useRef, useState } from "react";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";

export default function ShopByBrands() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const brandLogos = [brand1, brand2, brand3, brand4];
  const visibleLogos = [...brandLogos, ...brandLogos];

  useEffect(() => {
    const container = containerRef.current;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % brandLogos.length;
      const logoWidth = container.scrollWidth / visibleLogos.length;

      container.scrollTo({
        left: nextIndex * logoWidth,
        behavior: "smooth",
      });

      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="py-8 bg-white mx-auto">
      {/* Container with proper horizontal padding */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Shop by Brands</h2>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-blue-500 transition-colors"
          >
            View All Deals
          </a>
        </div>

        {/* Brand logos row */}
        <div ref={containerRef} className="overflow-hidden">
          <div className="flex gap-8 w-max">
            {visibleLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Brand ${index + 1}`}
                className="h-24 w-auto object-contain "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
