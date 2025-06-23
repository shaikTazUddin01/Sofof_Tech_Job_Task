import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../../assets/slider/1.png";
import img2 from "../../assets/slider/2.png";

const images = [img1, img2, img1, img2]; 

const Slider = () => {
  return (
    <div className="w-full ">
        <h1 className="text-3xl my-4">Home</h1>
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
              className="rounded-xl w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
