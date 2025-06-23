import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <div className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src="/src/assets/slider/1.png" alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="/src/assets/slider/2.png" alt="Slide 2" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;