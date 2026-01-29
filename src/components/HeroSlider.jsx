import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/intro/v1.jpeg",
  "/images/intro/v2.jpeg",
  "/images/intro/v3.jpeg",
];

/* 🔹 INNER SLIDER COMPONENT */
function Slider({ reverse = false }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Determine the order of images based on 'reverse' prop for visual variety
  const displayImages = reverse ? [...images].reverse() : images;

  return (
    <div className="relative w-full h-[420px] overflow-hidden rounded-xl shadow-lg group">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {displayImages.map((src, i) => (
          <div key={i} className="min-w-full h-full">
            <img
              src={src}
              alt={`Temple Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons (Visible on Hover) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {displayImages.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/50'}`}
            />
        ))}
      </div>
    </div>
  );
}

/* 🔹 MAIN HERO SLIDER */
export default function HeroSlider() {
  return (
    <section className="w-full bg-templeGold py-8 border-y-4 border-white/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Slider />
        <Slider reverse />
      </div>
    </section>
  );
}
