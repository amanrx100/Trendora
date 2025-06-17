import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CategorySlider = () => {
  // Sample food categories
  const categories = [
    { 
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop',
      title: 'Fresh Fruits',
      products: '125+ Products'
    },
    { 
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=200&h=200&fit=crop',
      title: 'Vegetables',
      products: '150+ Products'
    },
    { 
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop',
      title: 'Dairy & Eggs',
      products: '75+ Products'
    },
    { 
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=200&fit=crop',
      title: 'Snacks',
      products: '200+ Products'
    },
    { 
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop',
      title: 'Fish & Meats',
      products: '100+ Products'
    },
    { 
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=200&h=200&fit=crop',
      title: 'Frozen Foods',
      products: '80+ Products'
    },
    { 
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200&h=200&fit=crop',
      title: 'Yummy Candy',
      products: '90+ Products'
    },
    { 
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=200&h=200&fit=crop',
      title: 'Desserts',
      products: '60+ Products'
    },
    { 
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=200&h=200&fit=crop',
      title: 'Beverages',
      products: '85+ Products'
    },
    { 
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop',
      title: 'Bakery',
      products: '110+ Products'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const sliderRef = useRef(null);

  const itemWidth = 160; // Width of each item including gap
  const visibleItems = 5; // Number of items visible at once

  // Calculate maximum scroll position
  const maxIndex = Math.max(0, categories.length - visibleItems);

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    
    setTouchStart(null);
  };

  // Keyboard navigation
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
      {/* Slider Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 transition-all duration-300 hover:shadow-xl ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
          }`}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={20} className="text-gray-700" />
        </button>

        <button
          onClick={goToNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 transition-all duration-300 hover:shadow-xl ${
            currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
          }`}
          disabled={currentIndex === maxIndex}
        >
          <ChevronRight size={20} className="text-gray-700" />
        </button>

        {/* Slider Track */}
        <div 
          className="overflow-hidden mx-10"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * itemWidth}px)`,
            }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center mr-6 group cursor-pointer"
                style={{ width: '140px' }}
                onClick={() => console.log(`Clicked on ${category.title}`)}
              >
                {/* Category Circle */}
                <div className="relative mb-3">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-100 to-green-200 shadow-md group-hover:shadow-lg transition-all duration-300 overflow-hidden border-2 border-white group-hover:border-green-300">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback content */}
                    <div className="hidden w-full h-full bg-gray-100 items-center justify-center text-gray-500 text-xs text-center p-2">
                      {category.title}
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-green-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Category Info */}
                <div className="text-center">
                  <h3 className="font-medium text-gray-800 text-sm mb-1 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    {category.products}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-1 mt-6">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-green-500 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Optional: Slide counter */}
      <div className="text-center mt-2">
        <span className="text-xs text-gray-500">
          {currentIndex + 1} / {maxIndex + 1}
        </span>
      </div>
    </div>
  );
};

export default CategorySlider;