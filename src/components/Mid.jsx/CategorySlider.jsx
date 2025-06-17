import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import desserts from '../../assets/desserts.png';
import fish from '../../assets/fish.png';
import fruits from '../../assets/fruits.png';
import drinks from '../../assets/drinks.png';
import vege from '../../assets/vege.png';
import snacks from '../../assets/snacks.png';
import frozen from '../../assets/frozen.png';
import candy from '../../assets/candy.png';
import animalfood from '../../assets/animalfood.png';
import dairy from '../../assets/dairy.png';

const CategorySlider = () => {
  const categories = [
    { image: fruits, title: 'Fresh Fruits', products: '125+ Products', bgColor: '#FFF5E5' },
    { image: vege, title: 'Vegetables', products: '150+ Products', bgColor: '#E7FDE9' },
    { image: dairy, title: 'Dairy & Eggs', products: '75+ Products', bgColor: '#E6F0FF' },
    { image: snacks, title: 'Snacks', products: '200+ Products', bgColor: '#FFF0F5' },
    { image: fish, title: 'Fish & Meats', products: '100+ Products', bgColor: '#F0FFF0' },
    { image: frozen, title: 'Frozen Foods', products: '80+ Products', bgColor: '#F5F5DC' },
    { image: candy, title: 'Yummy Candy', products: '90+ Products', bgColor: '#FFF8DC' },
    { image: desserts, title: 'Desserts', products: '60+ Products', bgColor: '#FBEFFF' },
    { image: drinks, title: 'Beverages', products: '85+ Products', bgColor: '#F0F8FF' },
    { image: animalfood, title: 'Animal Food', products: '110+ Products', bgColor: '#F9F9F9' },
  ];

  const itemWidth = 115;
  const visibleItems = 10;

  const categoriesWithLoop = [
    ...categories.slice(-visibleItems),
    ...categories,
    ...categories.slice(0, visibleItems),
  ];

  const [currentIndex, setCurrentIndex] = useState(visibleItems);
  const [touchStart, setTouchStart] = useState(null);
  const sliderRef = useRef(null);

  const goToNext = () => setCurrentIndex(prev => prev + 1);
  const goToPrevious = () => setCurrentIndex(prev => prev - 1);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.style.transition = 'transform 0.5s ease-out';
      slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    const slider = sliderRef.current;
    const handleTransitionEnd = () => {
      if (currentIndex >= categories.length + visibleItems) {
        slider.style.transition = 'none';
        setCurrentIndex(visibleItems);
        requestAnimationFrame(() => {
          slider.style.transform = `translateX(-${visibleItems * itemWidth}px)`;
        });
      } else if (currentIndex <= 0) {
        slider.style.transition = 'none';
        setCurrentIndex(categories.length);
        requestAnimationFrame(() => {
          slider.style.transform = `translateX(-${categories.length * itemWidth}px)`;
        });
      }
    };

    slider.addEventListener('transitionend', handleTransitionEnd);
    return () => slider.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex, categories.length]);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrevious();
    }
    setTouchStart(null);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="relative">
        {/* === Gradient Fades === */}
        <div className="absolute left-0 top-0 h-full w-10 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 h-full w-10 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        {/* === Navigation Buttons === */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:scale-110 transition duration-300"
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:scale-110 transition duration-300"
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>

        {/* === Slider Container === */}
        <div
          className="overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={sliderRef}
            className="flex"
            style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
          >
            {categoriesWithLoop.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center mr-2 group cursor-pointer"
                style={{ width: `${itemWidth}px` }}
                onClick={() => console.log(`Clicked on ${category.title}`)}
              >
                {/* Category Circle */}
                <div
                  className="rounded-full overflow-hidden border-2 border-white group-hover:border-white transition-all duration-300 flex items-center justify-center w-[110px] h-[110px]"
                  style={{ backgroundColor: category.bgColor || '#F7F7F7' }}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-[60px] h-[60px] object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-gray-500 text-xs text-center p-2">
                    {category.title}
                  </div>
                </div>

                {/* Info */}
                <div className="mt-3 text-center">
                  <h3 className="font-medium text-gray-800 text-sm mb-1 group-hover:text-cyan-600 transition-colors duration-300 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{category.products}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
