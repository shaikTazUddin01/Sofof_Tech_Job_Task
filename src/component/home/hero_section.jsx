import { useState, useEffect } from "react";
import Slide1 from "../../assets/slider/1.png";
import Slide2 from "../../assets/slider/2.png";
import "./hero_section.css";
import { NextIcon, PrevIcon } from "../../assets/icons/icons";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("next");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const slides = [Slide1, Slide2, Slide1, Slide2];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrev = () => {
    setTransitionDirection("prev");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setTransitionDirection("next");
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setTransitionDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
  };
  const getVisibleSlides = () => {
    if (isSmallScreen) {
      return [{ index: currentSlide, position: 0 }];
    } else {
      const visibleSlides = [];
      const totalSlides = slides.length;

      for (let i = -1; i <= 2; i++) {
        let slideIndex = currentSlide + i;
        if (slideIndex < 0) {
          slideIndex = totalSlides + slideIndex;
        } else if (slideIndex >= totalSlides) {
          slideIndex = slideIndex - totalSlides;
        }
        visibleSlides.push({
          index: slideIndex,
          position: i,
        });
      }
      return visibleSlides;
    }
  };

  // Calculate widths and positions for lg screen
  const lg_gap = 1.5;
  const lg_partialWidth = 18.5;
  const lg_fullWidth = 30;

  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <div className="max-w-[712px] mx-auto">
        <h1 className="text-2xl lg:text-[32px] xl:text-[40px] tracking-wider font-bold -mt-8 md:-mt-6 text-[#222222]">
          Home
        </h1>
      </div>
      <div className="relative mt-6">
        <div className="flex items-center justify-center overflow-hidden">
          <div className="w-full h-[200px] relative">
            {getVisibleSlides().map(({ index, position }) => (
              <div
                key={`${index}-${currentSlide}`}
                className={`absolute h-full ${
                  isSmallScreen ? "top-0 left-0 w-full" : "" // For small screen
                } ${
                  !isSmallScreen && (position === -1 || position === 2)
                    ? "z-10"
                    : "z-20"
                } ${
                  transitionDirection === "next"
                    ? "animate-slide-in-next"
                    : "animate-slide-in-prev"
                }`}
                style={{
                  // for lg screen
                  ...(!isSmallScreen && {
                    width: `${
                      position === -1 || position === 2
                        ? lg_partialWidth
                        : lg_fullWidth
                    }%`,
                    left:
                      position === -1
                        ? "0"
                        : position === 0
                        ? `${lg_partialWidth + lg_gap}%`
                        : position === 1
                        ? `${lg_partialWidth + lg_fullWidth + 2 * lg_gap}%`
                        : `${lg_partialWidth + 2 * lg_fullWidth + 3 * lg_gap}%`,
                  }),
                  animationDuration: "500ms",
                  animationFillMode: "forwards",
                }}
              >
                <a href="/products">
                  <img
                    src={slides[index]}
                    alt={`Slide ${index + 1}`}
                    className={`h-full w-full object-cover rounded-lg shadow-md ${
                      !isSmallScreen && position === -1
                        ? "ml-auto"
                        : !isSmallScreen && position === 2
                        ? "mr-auto"
                        : ""
                    }`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 md:left-6 lg:left-12 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 rounded-full py-3 px-4 z-30 cursor-pointer"
        >
          <PrevIcon />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 md:right-6 lg:right-12 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-800 rounded-full py-3 px-4 z-30 cursor-pointer"
        >
          <NextIcon />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-[#65358A]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
