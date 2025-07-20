import React, { useState } from "react";

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    
  const slides = [
    {
      title: "GREEN DIAMOND",
      subtitle: "LUXURY APARTMENTS",
      designer: "THIẾT KẾ BỞI HOME SAN VIỆT NAM",
      buttonText: "KHÁM PHÁ NGAY",
      bgImage: "/images/panner1.jpg",
    },
    {
      title: "LUXURY DEPARTMENT",
      subtitle: "CHUNG CƯ VINHOME SMART CITY",
      designer: "THIẾT KẾ BỞI HOME SAN VIỆT NAM",
      buttonText: "KHÁM PHÁ NGAY",
      bgImage: "/images/panner2.jpg",
    },
    {
      title: "GREEN DIAMOND",
      subtitle: "LUXURY APARTMENTS",
      designer: "THIẾT KẾ BỞI HOME SAN VIỆT NAM",
      buttonText: "KHÁM PHÁ NGAY",
      bgImage: "/images/panner3.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
    
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slides[currentSlide].bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-xl mb-8">{slides[currentSlide].designer}</p>
          <button className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition-colors">
            {slides[currentSlide].buttonText}
          </button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slide;