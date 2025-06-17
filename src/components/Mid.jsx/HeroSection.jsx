import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { CaretDoubleDown } from "phosphor-react";
import banner from "../../assets/banner.png";
const slides = [1, 2, 3];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-400 h-130 mt-10 bg-cyan-50  mx-auto  items-center justify-center overflow-hidden pb-24 rounded-[50px_50px_50px_50px]">
      {/* Slide Content */}
      <div className="relative min-h-[500px] flex items-center justify-center  px-4 py-2  mx-auto">
        <button
          onClick={handlePrev}
          className="rounded-full p-3 border border-gray-300 hover:bg-cyan-200 transition duration-300"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="w-full max-w-7xl mx-auto flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-16 py-10"
            >
              {/* Left Side */}
              <div className="space-y-4 text-center md:text-left px-4 md:px-8">
                <p className="text-xs text-green-600 font-semibold uppercase">
                  Save Up To 50% Off On Your First Order
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                  Daily Grocery Order and <br /> Get <span className="text-[#00aaff]">Express</span> Delivery
                </h1>
                <div className="flex justify-center md:justify-start items-center gap-4">
                  <button className="bg-[#004d80] text-white px-4 py-2 rounded-full text-sm font-medium">
                    Explore Shop
                  </button>
                  <p className="text-sm text-gray-700">
                    Starting at <span className="text-red-500 font-semibold">$60.99</span>
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex justify-center md:justify-end px-4 md:px-8">
                <img
                  src={banner}
                  alt="Grocery Basket"
                  className="max-w-xs md:max-w-md"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="rounded-full p-3 border border-gray-300 hover:bg-cyan-200 transition duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Center Scroll Arrow */}
      <a
        href="#featureSection"
        className="w-20 h-20 text-center flex items-center justify-center 
                   bg-[#1f7a91] text-white border-4 border-white 
                   rounded-full absolute left-1/2 bottom-0 transform -translate-x-1/2 
                   hover:bg-cyan-600 transition-all duration-300 z-10"
      >
        <CaretDoubleDown size={28} weight="bold" />
      </a>
    </div>
  );
}
