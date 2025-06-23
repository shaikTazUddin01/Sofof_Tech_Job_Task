import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../../assets/slider/1.png";
import img2 from "../../assets/slider/2.png";

const images = [img1, img2, img1, img2]; 

const HeroArea = () => {
  return (
    <div className="w-full ">
      <div className="max-w-[712px] mx-auto">
        <h1 className="text-[40px] tracking-wider font-bold -mt-6 text-[#222222]">Home</h1>
      </div>
     <div className="mt-6">
     <Swiper
        spaceBetween={10}
        slidesPerView={2.5}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`slider-${idx}`}
              className="rounded-xl w-full h-[200px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    </div>
  );
};

export default HeroArea;
